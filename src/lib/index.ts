import type { Song, Channels } from '$lib/types';

export const AUDIO = new AudioContext();
export const GAIN = AUDIO.createGain();
GAIN.connect(AUDIO.destination);
export function play(s: Song, tempo: number) {
	let time = 0;

	s.flat(2).forEach((sound) => {
		const { duration } = sound;
		time += (duration / tempo) * 60;

		if (!('source' in sound && sound.source)) return;

		const startTime = AUDIO.currentTime + time;
		const gain = AUDIO.createGain();

		const { source, volume } = sound;

		gain.gain.setValueAtTime(volume / 100, startTime);
		gain.gain.exponentialRampToValueAtTime(0.001, Math.max(0, startTime - 0.01));
		source.connect(gain).connect(GAIN);
		source.start(startTime);
	});
}

export const channels: Channels = {
	R: 1,
	L: 2,
};

export * from './types';
export * from './notes';
