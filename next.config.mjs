/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["nodemailer"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ruslan-korzhuk.de",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
