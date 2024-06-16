/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? "/sampleBlog/sample-blog" : "",
  assetPrefix: isProd ? "/sampleBlog/sample-blog/" : "",
};
export default nextConfig;
