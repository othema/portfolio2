export const prerender = true;

export function load({ url }: { url: any }) {
  return {
    url: url.pathname,
  }
}
