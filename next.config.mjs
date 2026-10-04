/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export, served as Cloudflare Workers static assets (wrangler.jsonc).
  output: "export",
  images: {
    // Serve raw assets and skip Vercel's Image Optimization, which was
    // returning 402 (quota exceeded) for any not-yet-cached image.
    unoptimized: true,
  },
};

export default nextConfig;
