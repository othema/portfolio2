<script>
  import BlogCard from "../../components/blog-card.svelte";
  import Link from "../../components/link.svelte";
</script>

<h1 class="text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
  Blog
</h1>
<p class="text-gray-500 my-3 mb-12">I discuss new technology and share tutorials every week. View my portfolio <Link href="/" target="">here</Link>.</p>

<div class="divide-y [&>*]:py-6">
  <BlogCard tags={["Python", "Machine learning"]} title="Blog title" image="https://picsum.photos/300/200" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam optio vitae accusantium placeat dignissimos quibusdam eum sint quae quos!" />
  <BlogCard title="Blog title" image="https://picsum.photos/300/200" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam optio vitae accusantium placeat dignissimos quibusdam eum sint quae quos!" />
</div>