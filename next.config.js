const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "https://ayva-demo.imfast.io" : "",
  experimental: {
    reactRefresh: true,
  },
};
