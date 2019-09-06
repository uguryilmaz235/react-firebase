const admin = require("firebase-admin");
var serviceAccount = require("../ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "meow-not.appspot.com/"
});

const db = admin.firestore();

module.exports = { admin, db };
