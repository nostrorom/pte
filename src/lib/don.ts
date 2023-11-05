import { AUDIO } from '.';

type Sound = {
	buffer: AudioBuffer;
};

export default {
	buffer: await AUDIO.decodeAudioData(await (await fetch('/don.wav')).arrayBuffer())
} as Sound;
