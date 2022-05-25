<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		const allCategories = allPosts
			.flatMap((post) => post.meta.categories)
			.filter((category) => !!category);

		// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates/33121880#33121880
		const allUniueCategories = [...new Set(allCategories)];

		return {
			props: {
				categories: allUniueCategories
			}
		};
	};
</script>

<!-- must reside in separate script tag
won't work otherwise -->
<script>
	export let categories;
</script>

<h1>Categories</h1>
<ul>
	{#each categories as category}
		<li>
			<h2>
				<a class="post" href="/blog/categories/{category}">
					{category}
				</a>
			</h2>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
	}
</style>
