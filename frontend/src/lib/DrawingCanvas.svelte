<script lang="ts">
	import PxBrush from 'px-brush';
	import { onMount } from 'svelte';
	import type { Brush } from '../types';
	import { selectedBrush, selectedImageBlob, currentCanvas } from '$lib/store';

	let canvas: HTMLCanvasElement;
	let brush: HTMLCanvasElement;

	let brushCtx: CanvasRenderingContext2D;
	let ctx: CanvasRenderingContext2D;
	let pxBrush: PxBrush;
	let startPosition: { x: number; y: number } = { x: 0, y: 0 };

	$: {
		if (brushCtx && $selectedBrush) {
			setBrush($selectedBrush);
			brush.style.top = `${10 + $selectedBrush.size / 2}px`;
			brush.style.left = `${10 + $selectedBrush.size / 2}px`;
		}
	}
	$: {
		if ($selectedImageBlob) {
			drawImage(ctx, $selectedImageBlob);
		}
	}
	onMount(() => {
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		brushCtx = brush.getContext('2d') as CanvasRenderingContext2D;
		window.devicePixelRatio = 1;
		pxBrush = new PxBrush(canvas);
		$currentCanvas = canvas;
		clearCanvas(ctx);
	});

	const drawImage = (ctx: CanvasRenderingContext2D, blob: Blob) => {
		const img = new Image();
		img.onload = function () {
			ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
		};
		img.src = URL.createObjectURL(blob);
	};

	let mouseDown: boolean = false;
	function pointerEnter() {
		// brush.hidden = false;
	}
	function pointerOut() {
		brush.style.top = `${10 + $selectedBrush.size / 2}px`;
		brush.style.left = `${10 + $selectedBrush.size / 2}px`;
		mouseDown = false;
	}
	function pointerDown(e: MouseEvent) {
		mouseDown = true;
		startPosition = getPosition(canvas, e);
		pxBrush.draw({
			from: startPosition,
			to: startPosition,
			size: $selectedBrush.size,
			color: $selectedBrush.color
		});
	}
	function pointerMove(e: MouseEvent) {
		const position = getPosition(canvas, e);
		brush.style.top = `${position.y}px`;
		brush.style.left = `${position.x}px`;
		if (!mouseDown) {
			return;
		}
		pxBrush.draw({
			from: startPosition,
			to: position,
			size: $selectedBrush.size,
			color: $selectedBrush.color
		});
		startPosition = position;
	}
	function getPosition(canvas: HTMLCanvasElement, event: MouseEvent) {
		const rect = canvas.getBoundingClientRect();
		return {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top
		};
	}
	function setBrush(sBrush: Brush) {
		const { size, color } = sBrush;
		brush.width = size;
		brush.height = size;
		// brushCtx.clearRect(0, 0, brush.width, brush.height);
		// brushCtx.beginPath();
		brushCtx.fillStyle = color;
		brushCtx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
		brushCtx.fill();
	}

	function clearCanvas(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = '000';
		ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fill();
	}
</script>

<div class="inline-block relative overflow-clip">
	<canvas
		bind:this={canvas}
		class="canvas"
		width="256"
		height="512"
		on:touchmove={(e) => e.preventDefault()}
		on:pointerenter={pointerEnter}
		on:pointerup={pointerOut}
		on:pointerleave={pointerOut}
		on:pointercancel={pointerOut}
		on:pointerout={pointerOut}
		on:pointermove={pointerMove}
		on:pointerdown={pointerDown}
	/>
	<canvas bind:this={brush} class="brush" width="10" height="10" />
	<span class="label">{$selectedBrush?.label} </span>
</div>

<style lang="postcss" scoped>
	.canvas {
		@apply box-border z-0 border dark:border-gray-300 border-gray-500 aspect-[256/512];
	}
	.brush {
		@apply z-10 absolute pointer-events-none -translate-x-1/2 -translate-y-1/2;
	}
	.label {
		@apply px-2 text-base z-20 absolute top-0 left-0 pointer-events-none text-white select-none;
		color: white;
		font-weight: bolder;
		-webkit-text-stroke: 1px black;
		-webkit-text-fill-color: white;
	}
</style>
