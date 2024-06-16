/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/sampleBlog/sample-blog" : "",
  assetPrefix: isProd ? "/sampleBlog/sample-blog/" : "",
};
export default nextConfig;
