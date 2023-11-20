import type buffers from '$lib/buffers';

export type Sound = keyof typeof buffers;

// export type Note = { sound: Sound; dur?: number; vol?: number };
export type Note = [Sound, number?, number?];

export type Partition = Note[][];
export type Song = Note[];

export class Tone {
	sound: Sound;
	dur: number;
	vol: number;

	constructor(n: Note) {
		const [sound, dur, vol] = n;
		this.sound = sound;
		this.dur = dur ?? 1;
		this.vol = vol ?? 100;
	}
}
