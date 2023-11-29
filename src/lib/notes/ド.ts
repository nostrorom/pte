import { AUDIO, type Note } from '$lib';

const buffer = await AUDIO.decodeAudioData(await (await fetch('/ド.wav')).arrayBuffer());

export default ((duration = 1, volume = 100, channel = 'R') => {
	const source = AUDIO.createBufferSource();

	console.log(channel);

	source.buffer = buffer;

	return { source, volume, duration };
}) satisfies Note;
