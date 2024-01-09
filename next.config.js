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
            }
        ]
    }
}

module.exports = nextConfig
