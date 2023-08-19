<script lang="ts">
    import Link from "./link.svelte";

  export let title: string;
  export let image: string;
  export let description: string = "";
  export let tags: string[] = [];
</script>

<div class="group cursor-pointer flex gap-6">
  <img src={image} class="w-52 aspect-[3/2] object-cover rounded-lg" alt={title} />
  <div>
    <h2 class="font-medium text-xl group-hover:text-indigo-600 group-hover:underline group-hover:after:content-['_→']">{title}</h2>
    <p class="text-gray-600 text-sm my-3">{description}</p>
    
    <div class="mt-5 flex gap-1.5">
      {#each tags as tag}
        <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{tag}</span>
      {/each}
    </div>
  </div>
</div>