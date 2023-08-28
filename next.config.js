const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx"],
  compiler: {
    reactRemoveProperties: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
