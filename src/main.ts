import App from './App.svelte';

if (process.env.DEV) {
  import('chokidar').then((chokidar) => {
    chokidar.watch('./public/**/*').on('change', () => {
      if (location) location.reload();
    });
  });
}

const app = new App({
  target: document.body,
});

export default app;
