import type { channels } from '$lib';
export type Channel = keyof typeof channels;

type Silence = { type: 'silence'; duration: number };
type Sound = {
	type: 'sound';
	duration: number;
	volume: number;
	channel?: Channel;
	createSource: () => AudioBufferSourceNode;
	createGain?: () => GainNode;
};
export type Note =
	| ((channel?: Channel, duration?: number, volume?: number) => Sound)
	| ((duration?: number) => Silence);

export type Phrase = (Sound | Silence)[];

export type Song = Phrase[][];

// eslint-disable-next-line @typescript-eslint/ban-types
export type Pretty<T> = { [K in keyof T]: T[K] } & {};
