/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "eiescaparat-adghv.wordpress.com", pathname: "/**" },
      // si usas WordPress.com, muchas imágenes van por CDN:
      { protocol: "https", hostname: "i0.wp.com", pathname: "/**" },
      { protocol: "https", hostname: "i1.wp.com", pathname: "/**" },
      { protocol: "https", hostname: "i2.wp.com", pathname: "/**" },
    ],
  },
};
module.exports = nextConfig;
