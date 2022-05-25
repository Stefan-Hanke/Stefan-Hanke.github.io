<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<!-- must reside in separate script tag
won't work otherwise -->
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
