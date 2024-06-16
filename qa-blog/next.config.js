const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? "/qa-blog" : "",
  assetPrefix: isProd ? "/qa-blog/" : "",
  output: "export",
};
