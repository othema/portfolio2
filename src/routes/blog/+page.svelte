<script lang="ts">
  import type { PageData } from "./$types";
  import BlogCard from "../../components/blog-card.svelte";
  import Link from "../../components/link.svelte";

  export let data: PageData;
</script>

<h1 class="text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
  Blog
</h1>
<p class="text-gray-500 my-3 mb-12">I discuss new technology and share tutorials every week. View my portfolio <Link href="/" target="">here</Link>.</p>

<div class="divide-y [&>*]:py-6">
  {#each data.posts as post}
    <BlogCard href={"/blog/" + post.slug} title={post.title} description={post.description} tags={post.tags} image={post.image} />
  {/each}
</div>