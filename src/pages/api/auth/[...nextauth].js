import NextAuth from "next-auth";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import EmailProvider from "next-auth/providers/email";
import { initializeApp, getApp, getApps } from "firebase/app";
import { firestore } from "../../../../lib/firestore";
import { getFirestore } from "firebase-admin/firestore";
const app= !getApps().length ? initializeApp() :getApp();
const db= getFirestore()
export default NextAuth({
  adapter: FirestoreAdapter(firestore),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
  secret: process.env.SECRET,
});
