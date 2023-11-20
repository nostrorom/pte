<script lang="ts">
	import MONK from '$lib/music/monk';
	import { playSong } from '$lib/player';
</script>

<div class="flex flex-col p-12 gap-y-12">
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			playSong(MONK, 130);
		}}
	>
		MONK
	</button>
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			playSong(MONK, 120);
		}}
	>
		KIHON
	</button>
</div>
