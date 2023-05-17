const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')

const serviceAccount = require("src\pages\api\tufted-commerce-firebase-adminsdk-qu2cm-29508263af.json");

initializeApp({
  credential: serviceAccount
});
const db = getFirestore();
