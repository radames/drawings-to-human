import { writable } from 'svelte/store';
import type { Brush, Params, DrawingLayer } from '../types';
import { randomSeed } from '$lib/utils';

export const drawingLayers = writable<Map<string, DrawingLayer>>(new Map());
export const resultImage = writable<string>();
export const currentCanvas = writable<HTMLCanvasElement>();
export const selectedImage = writable<HTMLImageElement>();
export const selectedBrush = writable<Brush>();
export const selectedParams = writable<Params>({
	texture: '',
	seed: randomSeed(),
	steps: 10
});

export const generateHuman = writable<boolean>(false);
export const saveResult = writable<boolean>(false);