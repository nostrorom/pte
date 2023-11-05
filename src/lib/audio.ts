type Pretty<T> = { [K in keyof T]: T[K] } & // eslint-disable-next-line @typescript-eslint/ban-types
{};

const AUDIO = new AudioContext();
const BUFFER = AUDIO.createBuffer(1, AUDIO.sampleRate, AUDIO.sampleRate);
const GAIN = AUDIO.createGain();

GAIN.connect(AUDIO.destination);

export type Context = Pretty<{
	AUDIO: AudioContext;
	BUFFER: AudioBuffer;
	GAIN: GainNode;
}>;

export default {
	AUDIO,
	BUFFER,
	GAIN
} satisfies Context;
