<script lang="ts">
	let canvas: HTMLCanvasElement;
	import { API } from '../data';
	import { nanoid } from 'nanoid';
	import type { Params } from '../types';

	import {
		selectedParams,
		generateHuman,
		currentCanvas,
		resultImage,
		saveResult
	} from '$lib/store';

	$: (async () => {
		if ($generateHuman) {
			const results = await predict($currentCanvas.toDataURL(), $selectedParams);
			if (results) {
				$resultImage = results.data[0];
			}
			$generateHuman = false;
		}
	})();

	$: (async () => {
		if ($saveResult) {
			const results = await saveImage($resultImage);
			$saveResult = false;
		}
	})();

	let predictStatus: string = '';
	async function saveImage(base64Image: string) {
		return new Promise((resolve, reject) => {
			try {
				const a = document.createElement('a');
				a.download = `sucess-${Date.now()}.png`;
				a.target = '_self';
				a.onclick = async (e) => {
					if (a.href) {
						URL.revokeObjectURL(a.href);
					}
					a.href = base64Image;
				};
				a.click();
				resolve(null);
				console.log('Downloading image.');
			} catch (err) {
				reject();
			}
		});
	}
	async function predict(base64Image: string, { texture, steps, seed }: Params) {
		const session = nanoid(11);
		let hash, queue_position;
		let b = 0;
		predictStatus = 'Generating';
		const controller = new AbortController();
		// invalidation.then(() => {
		// 	controller.abort();
		// });
		await fetch(API + '/api/queue/push/', {
			signal: controller.signal,
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({
				fn_index: 2,
				data: [base64Image, texture, steps, Number(seed)],
				action: 'predict',
				session_hash: session
			})
		})
			.then(async (res) => {
				const data = await res.json();
				({ hash, queue_position } = data);
			})
			.catch((err) => {
				console.log(err);
			});

		let timeout = 0;
		let status, data;
		while (status !== 'QUEUED' || status !== 'PENDING') {
			try {
				const resp = await fetch(API + '/api/queue/status/', {
					signal: controller.signal,
					headers: { 'Content-Type': 'application/json' },
					method: 'POST',
					body: JSON.stringify({ hash: hash })
				});
				if (resp.status != 200) {
					break;
				}
				({ status, data } = await resp.json());
				if (status === 'QUEUED') {
					predictStatus = `Queue ${data}/${queue_position}`;
				} else if (status === 'PENDING') {
					predictStatus = 'Pending';
				} else if (status === 'FAILED') {
					predictStatus = 'Failed';
					break;
				} else if (status === 'COMPLETE') {
					predictStatus = 'Complete';
					break;
				}
				await new Promise((resolve) => setTimeout(resolve, 1000));
			} catch (error) {
				console.log(error);
				break;
			}
		}
		return data;
	}
</script>

{#if $resultImage}
	<div class="inline-block relative overflow-clip">
		<img class="image" alt="Generative Human Result" src={$resultImage} width="256" height="512" />
	</div>
{/if}

<style lang="postcss" scoped>
	.image {
		@apply max-w-none box-border z-0 border dark:border-gray-300 border-gray-500 aspect-[256/512];
	}
</style>