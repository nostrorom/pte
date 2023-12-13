<script lang="ts">
	import { MONK } from '../music/monk';
	import { KYOJAKU } from '../music/kyojaku';
	import { play } from '$lib';
	import { writable } from 'svelte/store';
	import playing from '$lib/stores/playing';

	const time = writable(0);

	let tempo = 120;

	let sources: AudioBufferSourceNode[] = [];

	function stop() {
		sources.forEach((s) => s.stop());
		sources = [];
		time.set(0);
	}
	// $: console.log($time, sources);
</script>

<div class="flex flex-col gap-y-12">
	<div class="flex justify-center p-3 border-b border-gray-800">
		<div class="p-4">Tempo</div>
		<input type="number" class="w-24 px-3 py-2 bg-black rounded-lg" bind:value={tempo} step="10" />
	</div>

	{#each [KYOJAKU, MONK] as song}
		{@const name = Object.keys(song)[0]}
		{#each song[name] as part, i}
			<button
				class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
				on:click={() => {
					play(part, time, tempo + (i >= 1 ? 30 : 0), sources, playing);
				}}
			>
				{name}
				{i + 1}
			</button>
		{/each}
	{/each}

	<button class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800" on:click={stop}>
		■
	</button>
</div>
