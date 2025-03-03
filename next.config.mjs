/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
          },
          {
            protocol: 'https',
            hostname: 'drive.google.com',
          },
        ],
      },


};

export default nextConfig;
