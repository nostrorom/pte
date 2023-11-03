<script lang="ts">
	import { browser } from '$app/environment';

	let AUDIO: AudioContext;
	let BUFFER: AudioBuffer;
	let GAIN: GainNode;
	let source: AudioBufferSourceNode;

	if (browser) {
		AUDIO = new AudioContext();

		BUFFER = AUDIO.createBuffer(1, AUDIO.sampleRate, AUDIO.sampleRate);

		const D = BUFFER.getChannelData(0);

		for (let i = 0; i < BUFFER.length; i++) {
			D[i] = Math.random() * 2 + 1;
		}

		GAIN = AUDIO.createGain();
		GAIN.gain.setValueAtTime(0.01, 0);
		GAIN.connect(AUDIO.destination);
	}

	function playWhiteNoise(A: AudioContext, B: AudioBuffer, G: GainNode) {
		source = A.createBufferSource();
		console.log(source);
		source.buffer = B;

		source.connect(G);
		source.start();
	}
</script>

<button
	on:click={() => {
		playWhiteNoise(AUDIO, BUFFER, GAIN);
	}}
>
	Play
</button>
