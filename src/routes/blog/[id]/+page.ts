import { error } from "@sveltejs/kit";

export async function load({ params }: { params: any }) {
  const post = await import(`../../../posts/${params.id}.md`)
  const { default: content, metadata } = post;

  if (metadata.published) {
    return {
      content,
      ...metadata
    }
  } else {
    return error(404, "Article does not exist.")
  }
}
