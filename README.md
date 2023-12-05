# lta-webapi

- Import Firebase config
    - Export from Firebase website
    - Place data in src/constants/lang-track-app-firebase-adminsdk-862cg-a80a5de2fc.json
- Create Firebase users
    - Email/password option
- Update configuration in src/constants/surveyApi.constants.ts
    - `WEBAPP_URL`: URL to the page where the app is hosted
    - `ADMIN_USERNAMES`: accounts to treat as administrators (no @email.domain suffix)
    - `EMAIL_DOMAIN`: domain that user email addresses are expected to be signed up at (including @ prefix)
    - `FIREBASE_DATABASE`: URL to Firebase "Realtime Database"