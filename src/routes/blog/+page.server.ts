import { readdirSync } from "fs";
import { cwd } from "process";
import path from "path";

export async function load() {
  const postNames = import.meta.glob('/src/posts/*.md', { eager: true })
  let posts: any[] = [];
  for (let postName in postNames) {
    const file = postNames[postName];
    const slug = postName.split("/").at(-1)?.replace(".md", "");
    
    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata: any = file.metadata;
      const post = { ...metadata, slug };
      posts.push(post);
    }
  }

  return {
    posts
  };
}

// sync function getPosts() {
// 	let posts: Post[] = []

// 	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

// 	for (const path in paths) {
// 		const file = paths[path]
// 		const slug = path.split('/').at(-1)?.replace('.md', '')

// 		if (file && typeof file === 'object' && 'metadata' in file && slug) {
// 			const metadata = file.metadata as Omit<Post, 'slug'>
// 			const post = { ...metadata, slug } satisfies Post
// 			post.published && posts.push(post)
// 		}
// 	}

// 	posts = posts.sort((first, second) =>
//     new Date(second.date).getTime() - new Date(first.date).getTime()
// 	)

// 	return posts
// }