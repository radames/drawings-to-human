export interface Color {
	color: number[];
	label: string;
}
export type RGB = `rgb(${number},${number},${number})`;
export interface Brush {
	color: RGB;
	size: number;
	label: string;
}

export interface Params {
	texture: string;
	seed: bigint;
	steps: number;
}

export interface FormElements extends HTMLCollection {
	seed: HTMLInputElement;
	steps: HTMLInputElement;
	texture0: HTMLInputElement;
	texture1: HTMLInputElement;
	texture2: HTMLInputElement;
}
interface Point {
	x: number;
	y: number;
}
interface pxPoint {
	from: Point;
	to: Point;
}
export interface DrawingLayer {
	brush: Brush;
	points: pxPoint[];
}
