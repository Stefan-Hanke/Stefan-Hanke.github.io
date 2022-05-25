# Sveltekit Github App

Demonstrates Sveltekit prerendered static site hosted on github pages.

## Making SvelteKit Blog

- <https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog>

## Using GitHub Pages

- <https://javascript.plainenglish.io/sveltekit-github-pages-4fe2844773de>

That post uses a custom CNAME file. Since I'm not, the blog does not work since the files are not rooted.

- <https://svelteland.github.io/svelte-kit-blog-demo/deply-to-github/>

This posts suggests to use the `kit.paths` option inside `svelte.config.js`. However, `npm run build` errors out with

```shell
config.kit.paths.assets option must be an absolute path, if specified. See https://kit.svelte.dev/docs/configuration#paths
```

- <https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites>

Fortunately, GitHub allows to have _user_ pages. For that, I've renamed the repository as suggested, dropped `kit.paths`, and redeployed. Done.
