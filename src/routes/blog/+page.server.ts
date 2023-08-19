import { readdirSync } from "fs";
import { cwd } from "process";
import path from "path";

const blogDir = "/static/posts";

export async function load() {
  const postNames = readdirSync(path.join(cwd(), blogDir)).filter((file) => file.endsWith(".md"));
  const posts = Promise.all(postNames.map(async (filename: string) => {
    const filePath = path.join(blogDir, filename);
    const { metadata } = await import(filePath);
    return {
      ...metadata,
      slug: path.parse(filePath).name
    }
  }));

  return {
    posts
  };
}
