import { betterAuth } from "better-auth"

export const auth = betterAuth({
  socialProviders: {
    vercel: {
      clientId: process.env.VERCEL_CLIENT_ID as string,
      clientSecret: process.env.VERCEL_CLIENT_SECRET as string,
      redirectUri: process.env.VERCEL_REDIRECT_URI,
    },
  },
})

export default auth
