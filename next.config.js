/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "res.cloudinary.com",
    //     port: "",
    //     pathname: ""
    //   }
    // ]
    domains: ["res.cloudinary.com", "img.icons8.com"],
  },
};

module.exports = nextConfig;
