import { AUDIO } from '$lib/audio';
import type { Note, Channel } from '$lib';

export const _buffer = await AUDIO.decodeAudioData(await (await fetch('/ホ.wav')).arrayBuffer());

const trim = 0.27;

const offset = Math.round(trim * _buffer.sampleRate);
const length = _buffer.length - offset;
const buffer = AUDIO.createBuffer(_buffer.numberOfChannels, length, _buffer.sampleRate);

for (let channel = 0; channel < _buffer.numberOfChannels; channel++) {
	for (let i = 0; i < length; i++) {
		buffer.getChannelData(channel)[i] = _buffer.getChannelData(channel)[i + offset];
	}
}

export default ((channel?: Channel, duration = 1, volume = 100) => {
	function createSource() {
		const source = AUDIO.createBufferSource();

		source.buffer = buffer;
		return source;
	}

	return { createSource, volume, duration, channel, type: 'sound' as const, name: 'ホ' };
}) satisfies Note;
