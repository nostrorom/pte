import { AUDIO } from '$lib/audio';
import type { Note, Channel } from '$lib';

export const buffer = await AUDIO.decodeAudioData(await (await fetch('/ド.wav')).arrayBuffer());

export default ((channel?: Channel, duration = 1, volume = 100) => {
	function createSource() {
		const source = AUDIO.createBufferSource();

		source.buffer = buffer;
		return source;
	}

	function createGain() {
		const gain = AUDIO.createGain();
		gain.gain.setValueAtTime(0.2, 0);

		return gain;
	}

	return {
		createSource,
		createGain,
		volume,
		duration,
		channel,
		type: 'sound' as const,
		name: 'ツ',
	};
}) satisfies Note;
