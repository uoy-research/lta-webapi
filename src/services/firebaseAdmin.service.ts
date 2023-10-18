var admin = require("firebase-admin");

var serviceAccount = require("../constants/lang-track-app-firebase-adminsdk-862cg-a80a5de2fc.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //databaseURL: "https://lang-track-app.firebaseio.com"
    databaseURL: "https://langtrackappdev-default-rtdb.europe-west1.firebasedatabase.app"
})

export default admin;