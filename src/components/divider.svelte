<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let title: string;
  export let id: string = "";
  export let style: string = "";
</script>

<div {id} class={twMerge($$slots.default ? "mb-5" : "mb-3", "mt-20 border-gray-200", style)}>
  <h2 class="text-xl leading-6 font-semibold text-gray-900">{title}</h2>
  {#if $$slots.default}
    <p class="mt-1 text-sm text-gray-600"><slot /></p>
  {/if}
</div>