import { publish } from 'gh-pages';

publish(
    'build', {
        branch: 'gh-pages',
        repo: 'https://github.com/Stefan-Hanke/sveltekit-github-app.git',
        dotfiles: true
    },
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Deploy Complete!');
        }
    }
);