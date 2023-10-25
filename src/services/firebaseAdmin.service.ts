import { FIREBASE_DATABASE } from "../constants/surveyApi.constants";

var admin = require("firebase-admin");

var serviceAccount = require("../constants/lang-track-app-firebase-adminsdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FIREBASE_DATABASE
})

export default admin;