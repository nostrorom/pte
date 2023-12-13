<script>
	import '../tailwind.css';
	import Sidebar from './Sidebar.svelte';
</script>

<main class="flex w-screen h-screen bg-black text-amber-200">
	<div class="w-1/4 border-r border-gray-800">
		<Sidebar></Sidebar>
	</div>
	<slot />
</main>
