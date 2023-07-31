<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let href: string = "#";
  export let style: string = "";
</script>

<a {href} target="_blank" class={twMerge("text-indigo-600 hover:underline font-semibold", style)}><slot /></a>
