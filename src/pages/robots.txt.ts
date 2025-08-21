import type { APIRoute } from "astro";

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /_astro/
Disallow: /api/
Disallow: /.well-known/
Disallow: /admin/

# Allow specific crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Crawl-delay for less aggressive crawlers
User-agent: *
Crawl-delay: 1

# Sitemaps
Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
