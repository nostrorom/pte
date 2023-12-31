import type { channels } from '$lib';
export type Channel = keyof typeof channels;

export type Silence = { type: 'silence'; duration: number };
export type Sound = {
	type: 'sound';
	duration: number;
	volume: number;
	channel?: Channel;
	name: string;
	createSource: () => AudioBufferSourceNode;
	createGain?: () => GainNode;
};
export type Note =
	| ((channel?: Channel, duration?: number, volume?: number) => Sound)
	| ((duration?: number) => Silence);

export type Word = (Sound | Silence)[];

export type Phrase = Word[];

export type Part = Phrase[];

export type Song = Record<string, Part[]>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type Pretty<T> = { [K in keyof T]: T[K] } & {};
