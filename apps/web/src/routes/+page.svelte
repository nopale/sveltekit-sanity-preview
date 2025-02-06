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
	<h1>{data.homepage.title}</h1>
	<h3>{data.homepage.hero?.heading}</h3>
	<p>{data.homepage.hero?.tagline}</p>

	{#if data.homepage.featuredPosts && data.homepage.featuredPosts.length > 0}
		{#each data.homepage.featuredPosts as post}
			<section>
				<h2>{post.title}</h2>
				<p>{post.excerpt}</p>

				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="/posts/{post.slug?.current}"> <button>Link to the post</button></a>
			</section>
		{/each}
	{/if}
</main>

<style>
</style>
