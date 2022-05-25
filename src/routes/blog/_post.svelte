<script>
	export let title;
	export let date;
	export let categories;
</script>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />

{#if categories.length}
	<aside>
		Categories:
		{#each categories as category}
			<a class="categorylink" href="/blog/categories/{category}">
				{category}
			</a>
		{/each}
	</aside>
{/if}

<style>
	aside {
		font-style: italic;
	}
	.categorylink {
		margin-right: 10px;
	}
</style>
