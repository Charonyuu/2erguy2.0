/**
 * @type {import('next').NextConfig}
 */

const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");

const plugins = [
  /* ...other plugins... */
  [
    withSvgr,
    {
      // config for this plugin
    },
  ],
  /* ...other plugins... */
];

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins(plugins, nextConfig);
