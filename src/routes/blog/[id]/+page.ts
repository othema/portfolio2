export async function load({ params }: { params: any }) {
  const post = await import(`../../../posts/${params.id}.md`)
  const { default: content, metadata } = post;

  return {
    content,
    ...metadata
  }
}
