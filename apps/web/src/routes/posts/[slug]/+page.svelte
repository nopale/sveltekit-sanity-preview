<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	$effect(() => {
		console.log('This is a side effect');
		console.log(data);
		return () => {
			console.log('This is a cleanup function');
		};
	});
</script>

<main>
	<h1>{data.postPage.title}</h1>
</main>
