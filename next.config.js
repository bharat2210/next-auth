/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        GITCLIENT_ID:process.env.GITCLIENT_ID,
        GITSECRET:process.env.GITSECRET
    }
}

module.exports = nextConfig
