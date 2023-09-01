import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });

export function load({ url }: { url: any }) {
  return {
    url: url.pathname,
  }
}
