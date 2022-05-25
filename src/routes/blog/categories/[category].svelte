<script context="module">
	export const load = async ({ params, fetch }) => {
		// the filename [category].svelte is a URL template
		// and surfaces here also in params.category
		const currentCategory = params.category;
		const response = await fetch('/api/posts.json');
		const posts = await response.json();

		const matchingPosts = posts.filter(
			(post) => post.meta.categories && post.meta.categories.includes(currentCategory)
		);

		return {
			props: {
				posts: matchingPosts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<ul>
	{#each posts as post}
		<li>
			<h2>
				<a class="post" href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
	}
</style>
