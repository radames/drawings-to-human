<script lang="ts">
	import TemplateGallery from '$lib/TemplateGallery.svelte';
	import BrushSelector from '$lib/BrushSelector.svelte';
	import ParamSelector from '$lib/ParamsSelector.svelte';
	import DrawingCanvas from '$lib/DrawingCanvas.svelte';
	import ResultCanvas from '$lib/ResultCanvas.svelte';
	import { generateHuman, saveResult, resultImage } from '$lib/store';

	let results = false;
</script>

<div class="max-w-screen-md mx-auto px-3 py-5 relative z-0">
	<article class="prose dark:prose-invert">
		<h1>Drawings to Human</h1>
		<p>
			This is an unofficial drawing tool to explore the generative human generator <a
				href="https://github.com/yumingj/Text2Human"
				target="_blank"><span>Text2Human</span></a
			>. Please check all the model features on this
			<a href="https://huggingface.co/spaces/CVPR/Text2Human" target="_blank">Space</a>.
		</p>
		<small>
			<h4 id="thanks-to">Thanks to</h4>
			<p>
				Authors: <a href="https://yumingj.github.io/" target="_blank">Yuming Jiang</a>,
				<a href="https://williamyang1991.github.io/" target="_blank">Shuai Yang</a>,
				<a href="http://haonanqiu.com/" target="_blank">Haonan Qiu</a>,
				<a href="https://wywu.github.io/" target="_blank">Wayne Wu</a>,
				<a href="https://www.mmlab-ntu.com/person/ccloy/" target="_blank">Chen Change Loy</a>
				and <a href="https://liuziwei7.github.io/" target="_blank">Ziwei Liu</a><br />
			</p>
			<p>
				<a href="https://huggingface.co/hysts" target="_blank">@hysts</a> for the original Space implementation
			</p>
		</small>
		<details open>
			<summary class="cursor-pointer"> <small>More</small> </summary>
			<p>
				The backend is powered by a <a href="https://gradio.app/" target="_blank">Gradio</a>
				application running on
				<a href="https://huggingface.co/spaces/CVPR/Text2Human" target="_blank">Spaces</a>. You can
				also check the source code and clone it locally if you want:
			</p>

			<p>
				<code class="block whitespace-pre overflow-x-scroll">
					git clone https://huggingface.co/spaces/CVPR/Text2Human
				</code>
			</p>
		</details>
	</article>
	<BrushSelector />
	<TemplateGallery />
	<div class="drawings py-3">
		<DrawingCanvas />
		<!-- {#if results} -->
		<ResultCanvas />
		<!-- {/if} -->
	</div>
	<button
		on:click|preventDefault={() => ($generateHuman = true)}
		disabled={$generateHuman === true}
	>
		Generate Human
	</button>
	<button
		on:click|preventDefault={() => ($saveResult = true)}
		disabled={$saveResult === true || !$resultImage}
	>
		Save Result
	</button>
	<ParamSelector />
</div>

<style lang="postcss" scoped>
	.drawings {
		@apply grid grid-cols-1 sm:grid-cols-2 place-items-center;
	}
	button {
		@apply p-1 disabled:opacity-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
	}
</style>
