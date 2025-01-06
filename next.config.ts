import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === 'development') {
    //await setupDevPlatform();
    setupDevPlatform().catch(e => console.error(e));
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true, // add trailing slash to produce index.html file
  experimental: {
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  transpilePackages: ['@acme/ui', 'lodash-es'],
  eslint: {
    ignoreDuringBuilds: true
  },
  // forcing the creation of an index.html for every page to allow
  // providers serving pages without having to add .html to the url
  exportPathMap: async function (defaultPathMap) {
    const pathMap = {};

    for (const [path, config] of Object.entries(defaultPathMap)) {
      if (path === "/") {
        pathMap[path] = config;
      } else {
        pathMap[`${path}/index`] = config;
      }
    }

    return pathMap;
  },
}

export default nextConfig;

