<script lang="ts">
	import ctx, { type Context } from '$lib/audio';

	function playWhiteNoise(ctx: Context, vol: number) {
		for (let i = 0; i < ctx.BUFFER.length; i++) {
			ctx.BUFFER.getChannelData(0)[i] = Math.random() * 2 + 1;
		}
		const source = ctx.AUDIO.createBufferSource();
		source.buffer = ctx.BUFFER;

		ctx.GAIN.gain.setValueAtTime(vol / 100, 0);

		source.connect(ctx.GAIN);
		source.start();
	}

	function createWhiteNoise(ctx: Context) {
		for (let i = 0; i < ctx.BUFFER.length; i++) {
			ctx.BUFFER.getChannelData(0)[i] = Math.random() * 2 + 1;
		}
		const source = ctx.AUDIO.createBufferSource();
		source.buffer = ctx.BUFFER;

		// ctx.GAIN.gain.setValueAtTime(vol / 100, 0);

		return source;
	}

	$: console.log(ctx.AUDIO.currentTime);

	function playSnare(ctx: Context, vol: number) {
		// const source = ctx.AUDIO.createBufferSource();
		// source.buffer = ctx.BUFFER;

		const source = createWhiteNoise(ctx, vol);

		const GAIN = ctx.AUDIO.createGain();
		GAIN.gain.setValueAtTime(1, ctx.AUDIO.currentTime);
		GAIN.gain.exponentialRampToValueAtTime(0.01, ctx.AUDIO.currentTime + 0.2);

		const snareFilter = ctx.AUDIO.createBiquadFilter();
		snareFilter.type = 'highpass';
		snareFilter.frequency.value = 1500;
		snareFilter.connect(ctx.GAIN);

		source.connect(GAIN);
		GAIN.connect(snareFilter);

		source.start();
		source.stop(ctx.AUDIO.currentTime + 0.1);
		// source.onended = () => {
		// 	source.disconnect(snareFilter);
		// 	snareFilter.disconnect(ctx.GAIN);
		// };

		const OSC = ctx.AUDIO.createOscillator();
		OSC.type = 'triangle';
		OSC.frequency.setValueAtTime(800, ctx.AUDIO.currentTime);

		const oscGain = ctx.AUDIO.createGain();
		oscGain.gain.setValueAtTime(1, ctx.AUDIO.currentTime);
		oscGain.gain.exponentialRampToValueAtTime(0.01, ctx.AUDIO.currentTime);

		OSC.connect(oscGain);
		oscGain.connect(GAIN);
		OSC.start();
		OSC.stop(ctx.AUDIO.currentTime + 0.2);
	}

	function playDon(ctx: Context, vol: number, val: number = 1) {
		const OSC = ctx.AUDIO.createOscillator();
		OSC.frequency.setValueAtTime(200, 0);
		OSC.frequency.exponentialRampToValueAtTime(0.001, ctx.AUDIO.currentTime + val);

		const GAIN = ctx.AUDIO.createGain();
		GAIN.gain.setValueAtTime(5, 0);
		GAIN.gain.exponentialRampToValueAtTime(0.001, ctx.AUDIO.currentTime + val);

		OSC.connect(GAIN);
		GAIN.connect(ctx.GAIN);
		ctx.GAIN.gain.setValueAtTime(vol / 100, 0);
		OSC.start();
		OSC.stop(ctx.AUDIO.currentTime + val);
		console.log('don');
		// OSC.onended = () => {
		// 	OSC.disconnect(GAIN);
		// 	GAIN.disconnect(ctx.GAIN);
		// };
	}
</script>

<div class="flex flex-col p-12 gap-y-12">
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			playWhiteNoise(ctx, 2);
		}}
	>
		White noise
	</button>

	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			playWhiteNoise(ctx, 2);
		}}
	>
		White noise
	</button>

	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			playSnare(ctx, 2);
		}}
	>
		Snare
	</button>
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			playDon(ctx, 15, 0.5);
		}}
	>
		Don
	</button>
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			playDon(ctx, 20, 1);
		}}
	>
		Don
	</button>
</div>
