/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "webcdn.hirezstudios.com",
                pathname: "**"
            }
        ]
    }
}

module.exports = nextConfig
