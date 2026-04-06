/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Studio-Reverii',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Studio-Reverii',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
