import type { Part } from '$lib/types';
import { AUDIO, GAIN } from '$lib/audio';
import { get, type Writable } from 'svelte/store';

GAIN.connect(AUDIO.destination);

export const channels = {
	R: 0.45,
	L: -0.45,
};

export function play(
	p: Part,
	time: Writable<number>,
	tempo: number,
	sources: AudioBufferSourceNode[],
) {
	time.set(0.01);

	p.flat(2).forEach((sound) => {
		if (sound.type === 'sound') {
			const source = sound.createSource();

			const startTime = AUDIO.currentTime + get(time);

			const gain = AUDIO.createGain();
			gain.gain.setValueAtTime(sound.volume / 100, startTime);
			gain.gain.exponentialRampToValueAtTime(0.001, Math.max(0, startTime - 0.01));

			const PANNER = AUDIO.createStereoPanner();

			PANNER.pan.value = sound.channel ? channels[sound.channel] : 0;

			if (sound.createGain) {
				source.connect(sound.createGain()).connect(gain).connect(PANNER).connect(GAIN);
			} else {
				source.connect(gain).connect(PANNER).connect(GAIN);
			}

			source.start(startTime);

			sources.push(source);
		}
		time.set(get(time) + (sound.duration / tempo) * 60);
	});
}

export * from './types';
export * from './notes';
