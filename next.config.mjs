/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable webpack to handle markdown files
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        type: 'asset/source',
      });
      return config;
    },
  };
  
  export default nextConfig;