/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd8j0ntlcm91z4.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  onRecoverableError: (error) => {
    // Suppress hydration mismatch warnings caused by browser extensions like Dark Reader
    if (
      error.message?.includes('hydrat') ||
      error.message?.includes('darkreader')
    ) {
      return
    }
    console.error(error)
  },
}

export default nextConfig
