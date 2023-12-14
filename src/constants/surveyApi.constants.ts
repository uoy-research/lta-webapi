import config = require('./config.json')

export const PING_MESSAGE = config.ping_message
export const PORT = config.port
export const WEBAPP_URL = config.webapp_url
export const MONGO_URL = config.mongo_url
export const ADMIN_USERNAMES = config.admin_usernames
export const EMAIL_DOMAIN = config.email_domain
export const TIMEZONE = config.timezone
export const FIREBASE_DATABASE = config.firebase_database

export const JMESPATH_dataset = `{
    "userId": userId,
    "_id": _id,
    "createdAt": createdAt,
    "publishAt": publishAt,
    "expireAt": expireAt,
    "firstOpenedAt": firstOpenedAt,
    "lastOpenedAt": lastOpenedAt,
    "dataset._id": dataset._id,
    "dataset.createdAt": dataset.createdAt
    `;

export const NOTIFICATION_CHECK_INTERVAL_MS = 10 * 1000; // how often do we check if it's time to send a notif

export const NOTIFY_PUBLISH_SINCE_MINUTES = 30; // for catching up, how long back should we still send notifs for.
export const NOTIFY_EXPIRE_IN_MINUTES = 30; // if not answered when 30 minutes before expiration, second notif goes out, should be 30 in prod

export const EXPIRE_DEFAULT_AFTER_PUBLISH_MINUTES = 60; // how long from publish to expiration, should be 60 in prod
