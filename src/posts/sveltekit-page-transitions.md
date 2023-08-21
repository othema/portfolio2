---
title: Stupidly easy page transitions in SvelteKit
image: /img/me_large.jpg
description: Making page transitions has never been easier. No additional modules needed.
date: 2023-08-20
tags:
  - Svelte
published: true
---

## Giving the client access to the url
For the client to trigger a page transition, it needs to know when the page has changed. We can easily do this in SvelteKit by using a server-side `+layout.js` which returns the current url.

```js
// routes/+layout.js

export function load({ url }) {
  return {
    url: url.pathname,
  }
}
```

## Implementing transitions
Now the client has access to the URL, it needs to perform a transition whenever it changes. We can utilise a key block for this. Key blocks destroy and recreate their contents whenever the value it has been given changes.
```svelte title="test"
<!-- routes/+layout.svelte -->

<script>
  import { fly } from "svelte/transition";
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
- The key block destroys and recreates its children every time `data.url` changes.
- When the `<div>` element is recreated, a transition is caused by the builtin Svelte library.
- The `<div>` element contains a `<slot />` which inserts the rest of the page content inside of it.

## Customizing the transition
Svelte offers 7 different transitions you can use: `fade`, `blur`, `fly`, `slide`, `scale`, `draw` and `crossfade`. Each transition takes in different parameters which you can read about <a href="https://svelte.dev/docs/svelte-transition" target="_blank">here</a>.

## Conclusion
Thanks for reading and I hope you enjoyed this article. If you have any questions (or just want to chat!), drop me an email at djv.george@gmail.com. See you!