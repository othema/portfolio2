import { getPosts } from "$lib/helpers";

export async function load() {
  const posts = getPosts();
  return { posts };
}
