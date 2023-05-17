/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRIPE_PUBLIC: process.env.STRIPE_PUBLIC,
    STRIPE_SECRET: process.env.STRIPE_SECRET,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    EMAIL_SERVER_USER:process.env.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD:process.env.EMAIL_SERVER_PASSWORD,
    EMAIL_SERVER_HOST:process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT:process.env.EMAIL_SERVER_PORT,
    EMAIL_FROM:process.env.EMAIL_FROM,
    COMPANY_NAME: process.env.COMPANY_NAME,
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    NEXTAUTH_URL:process.env.NEXTAUTH_URL,
    NEXTAUTH_URL_INTERNAL:process.env.NEXTAUTH_URL_INTERNAL,
    SECRET:process.env.SECRET,
  },
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname:'files.stripe.com',
        port:'',
        pathname:'/links/**',
      }
    ]
  }
};

module.exports = nextConfig;
