<script lang="ts">
  import fs from 'fs/promises';
  import os from 'os';
  import { onMount } from 'svelte';

  function getPlatformName() {
    switch (os.platform()) {
      case 'win32':
        return 'Windows';
      case 'darwin':
        return 'macOS';
      case 'linux':
        return 'Linux';
      default:
        return 'Unknown';
    }
  }

  let pkg: { name: string; version: string };

  onMount(async () => {
    pkg = JSON.parse(await fs.readFile('package.json', 'utf8'));
  });
</script>

<main>
  <h1>Hello {os.userInfo().username}!</h1>
  {#if pkg}
    <p>You're running {pkg.name} v{pkg.version} with NW.js and Svelte on {getPlatformName()}!</p>
  {/if}
</main>

<style lang="scss">
  $orange: #ff3e00;

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;

    h1 {
      color: $orange;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
    }

    @media (min-width: 640px) {
      max-width: none;
    }
  }
</style>
