const blogDir = "/static/posts";

export async function load({ params }: { params: any }) {
  const post = await import(`${blogDir}/${params.id}.md`);
  const { default: content, metadata } = post;

  return {
    content,
    ...metadata
  }
}
