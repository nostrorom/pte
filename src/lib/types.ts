type Channel = 'R' | 'L';
export type Channels = Record<Channel, 1 | 2>;

type Silence = { duration: number };
type Sound = {
	source: AudioBufferSourceNode;
	volume: number;
	duration: number;
};
export type Note =
	| ((duration: number, volume: number, channel: Channel) => Sound)
	| ((duration: number) => Silence);

export type Phrase = (Sound | Silence)[];

export type Song = Phrase[][];

// eslint-disable-next-line @typescript-eslint/ban-types
export type Pretty<T> = { [K in keyof T]: T[K] } & {};
