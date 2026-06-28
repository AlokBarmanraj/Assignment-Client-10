/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images:{
    remotePatterns:[
       {
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "**",
      },
    ]
   }
};

export default nextConfig;