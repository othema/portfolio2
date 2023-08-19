<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let href: string = "#";
  export let style: string = "";
  export let target = "_blank";
</script>

<a {href} {target} class={twMerge("text-indigo-600 hover:underline font-semibold", style)}><slot /></a>
