/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "webcdn.hirezstudios.com",
                pathname: "**"
            }, 
            {
                protocol: "https",
                hostname: "hirez-api.onrender.com",
                pathname: "**"
            },
            {
                protocol: "http",
                hostname: "localhost",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "paladins-web.vercel.app",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "paladinslx.com",
                pathname: "**"
            }
        ],
        unoptimized: true
    }
}

module.exports = nextConfig
