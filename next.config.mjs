/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa';

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  trailingSlash: true,


// https://github.com/vercel/next.js/issues/56253
  output: process.env.NODE_ENV === 'development' ? undefined : 'export'
});
export default nextConfig;