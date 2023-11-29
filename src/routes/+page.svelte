<script lang="ts">
	import MONK from '../music/monk';
	import KYOJAKU from '../music/kyojaku';
	import { play } from '$lib';
</script>

<div class="flex flex-col p-12 gap-y-12">
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			play(MONK, 130);
		}}
	>
		MONK
	</button>
	<button
		class="px-6 py-2 mx-auto rounded-lg bg-neutral-900 hover:bg-neutral-800"
		on:click={() => {
			play(KYOJAKU, 120);
		}}
	>
		KYOJAKU
	</button>
</div>
