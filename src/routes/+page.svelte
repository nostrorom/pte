<script lang="ts">
	import playing from '$lib/stores/playing';

	// $: console.log($playing);
</script>

{#if $playing}
	<div class="w-full p-4 px-8 space-y-2 overflow-y-auto">
		{#each $playing as phrase}
			<div class="flex justify-center space-x-3">
				{#each phrase as word}
					<div class="flex px-2 space-x-2 rounded-md bg-gray-900/80">
						{#each word as note}
							<div
								class={note.name === 'ド'
									? 'text-teal-400'
									: note.name === 'ツ'
										? ''
										: 'text-gray-500'}
							>
								{note.name ?? '_'}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		{/each}
	</div>
{/if}
