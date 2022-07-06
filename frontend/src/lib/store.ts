import { writable } from 'svelte/store';
import type { Brush, Params } from '../types';
import { randomSeed } from '$lib/utils';

export const resultImage = writable<string>();
export const currentCanvas = writable<HTMLCanvasElement>();
export const selectedImageBlob = writable<Blob>();
export const selectedBrush = writable<Brush>();
export const selectedParams = writable<Params>({
	texture: '',
	seed: randomSeed(),
	steps: 10
});

export const generateHuman = writable<boolean>(false);
export const saveResult = writable<boolean>(false);