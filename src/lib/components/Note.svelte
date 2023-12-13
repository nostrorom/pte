<script lang="ts">
	import type { Sound, Silence } from '$lib/types';

	export let note: Sound | Silence;
</script>

<div class="p-2 m-1">
	{note.name ?? '_'}
</div>
