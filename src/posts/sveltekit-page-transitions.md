---
title: Stupidly easy page transitions in SvelteKit
image: /img/me_large.jpg
description: Making page transitions has never been easier. No additional modules needed.
date: 2023-08-20
tags:
  - Svelte
published: false
---


## Giving the client access to the url
```js
// +layout.js

export function load({ url }) {
  return {
    url: url.pathname,
  }
}
```

## Implementing transitions
```svelte
<!-- +layout.svelte -->

<script>
  export let data;
</script>

{#key data.url}
  <div
    in:fly={{ y: -10, duration: 300, delay: 300 }}
    out:fly={{ y: 10, duration: 300 }}
  >
    <slot />
  </div>
{/key}
```
- The `#key` block updates the containing code every time `data.url` changes.
- This causes a transition using the builtin SvelteKit transition library.

## Troubleshooting

## Conclusion
