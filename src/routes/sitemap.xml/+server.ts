import { getPosts } from "$lib/helpers";

const url = "https://www.djvgeorge.me";

export async function GET() {
  const posts = await getPosts();
  console.log(posts);

  return new Response(
    `
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${url}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${url}/blog</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      ${posts.map((post) => `
      <url>
        <loc>${url}/blog/${post.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.4</priority>
      </url>
      `)}
    </urlset>
    `.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "max-age=0, s-maxage=3600"
      }
    }
  );
}