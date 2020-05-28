const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "https://ayva-demo.imfast.io" : "",
  distDir: "build",
  experimental: {
    reactRefresh: true,
  },
};
