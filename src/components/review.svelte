<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let author: string;
  export let style: string = "";
</script>

<div class={twMerge("rounded-lg p-6 border border-gray-200 hover:shadow duration-75 bg-white text-center", style)}>
  {#each Array(5) as _, index (index)}
    <svg class="w-5 h-5 inline text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
    </svg>    
  {/each}
  <blockquote class="mt-3 text-sm whitespace-normal text-justify">
    <slot />
    <cite class="block mt-3 text-gray-600">- {author}</cite>
  </blockquote>
</div>