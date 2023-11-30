<script lang="ts">
	// import MONK from '../music/monk';
	import KYOJAKU from '../music/kyojaku';
	import { play } from '$lib';
	import { writable } from 'svelte/store';

	const time = writable(0);

	let tempo = 120;

	let sources: AudioBufferSourceNode[] = [];

	function stop() {
		sources.forEach((s) => s.stop());
		sources = [];
		time.set(0);
	}
	$: console.log($time, sources);
</script>

<div class="flex flex-col p-12 gap-y-12">
	<div class="flex justify-center">
		<div class="p-4">Tempo</div>
		<input type="number" class="w-24 px-3 py-2 bg-black rounded-lg" bind:value={tempo} step="10" />
	</div>
	<!-- <button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			play(MONK, 130);
		}}
	>
		MONK
	</button> -->
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			play(KYOJAKU.part1, time, tempo, sources);
		}}
	>
		KYOJAKU 1
	</button>
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			play(KYOJAKU.part2, time, tempo + 30, sources);
		}}
	>
		KYOJAKU 2
	</button>
	<button class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800" on:click={stop}>
		■
	</button>
</div>
