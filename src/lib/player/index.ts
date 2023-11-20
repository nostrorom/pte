import { AUDIO, GAIN } from '$lib/audio';
import buffers from '$lib/buffers';
import { Tone, type Note, type Song } from '$lib/player/types';

function playSound(note: Note, start: number) {
	const { sound, vol = 100 } = new Tone(note);

	const buffer = buffers[sound];
	const startTime = AUDIO.currentTime + start;
	const source = AUDIO.createBufferSource();

	if (buffer) {
		source.buffer = buffer;
	}

	const gain = AUDIO.createGain();
	gain.gain.setValueAtTime(vol / 100, startTime);
	gain.gain.exponentialRampToValueAtTime(0.001, Math.max(0, startTime - 0.1));
	source.connect(gain).connect(GAIN);

	source.start(startTime);
}

export function playSong(s: Song, tempo: number) {
	let t = 0;
	s.forEach((n) => {
		const { dur = 1 } = new Tone(n);

		playSound(n, t);

		t += (dur / tempo) * 60;
	});
}
