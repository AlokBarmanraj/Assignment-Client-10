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
       {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "**",
      },
       {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
       {
        protocol: "https",
        hostname: "www.qidu.info",
        pathname: "**",
      },
    ]
   }
};

export default nextConfig;