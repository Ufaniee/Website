/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    images: {
      domains: ['res.cloudinary.com'],
    },
  }
  
  module.exports = {
    basePath: '/Website', // Replace 'your-repository-name' with your actual repository name
    assetPrefix: '/Website/', // Replace 'your-repository-name' with your actual repository name
  };
  
  