<script lang="ts">
  export let title: string;
  export let image: string;
  export let description: string = "";
  export let tags: string[] = [];
  export let href: string;
  export let date: string;
</script>

<a class="group cursor-pointer flex flex-col sm:flex-row gap-6" {href}>
  <img src={image} class="w-full sm:w-52 aspect-[3/2] object-cover rounded-lg" alt={title} />
  <article>
    <span class="text-gray-600 text-xs">{date}</span>
    <span class="ml-3 inline-flex gap-1.5 mb-1.5">
      {#each tags as tag}
        <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{tag}</span>
      {/each}
    </span>
    <h2 class="font-medium text-xl group-hover:text-indigo-600 group-hover:underline group-hover:after:content-['_→']">{title}</h2>
    <p class="text-gray-600 text-sm my-1.5">{description}</p>
    
  </article>
</a>