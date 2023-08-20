<script lang="ts">
  export let data: any;
</script>

<svelte:head>
  <title>{data.title} | Daniel George</title>
</svelte:head>

<div class="bg-gray-100 p-6 rounded-lg mb-10 shadow">
  <span class="text-gray-600 text-sm">{data.date}</span>
  <span class="ml-3 inline-flex gap-1.5 mb-3 align-baseline">
    {#each data.tags as tag}
      <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">{tag}</span>
    {/each}
  </span>
  <h1 class="text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">{data.title}</h1>
  <p class="text-gray-600 mt-3">{data.description}</p>
</div>
<div class="max-w-none prose prose-headings:font-bold prose-p:text-gray-600 prose-img:w-full prose-img:rounded-lg prose-a:text-indigo-600 hover:prose-a:underline prose-a:no-underline prose-a:font-semibold">
  <svelte:component this={data.content} />
</div>
