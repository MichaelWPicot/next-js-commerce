import { initFirestore } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { app } from "./clientApp";