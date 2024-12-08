const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUTZOqRhT9K6neDvP4EkSrpiqAjqDgt6ik3qKBFlFokAYUp/wDqSxcJ+UmSWWZ3+ZPSOE4NbPIe5mwoetyOff0OffeF4DjgKAeKkHzBSRpUMAMVcesTBBoAiVfrVAKKODBDIImqKntsZMOfM6c7C0x7RPBny1MbIb1zKSjg8lEnYnsLqfdaPkEThRIcicM3O8ARjjkDdHlWXMsbizXGTU08qzL3Yd6POpDxyjKMptmcFpr1Z7AqUKEQRpgv52sUYRSGPZQOYRB+jn6ZcfJg2Qy1tikb6W0LgST+TGR5rjUo56tJIPDOO02es5QYz5H3+OWvGTUXXe+t2tElfHWtMqtvthNH3axmBeQnjzHSYnslv5KnwQ+Rp7uIZwFWflp3Xcmoyu2pGc9dmIwbr6nR4u9yy06bmw32Kihj0W6sQ+YEb/9pO7qwQzG+hrLdk1esu2usn8Y1lSju6v7Mh31O12fZ1k8fF5LH4kP07de2f4f3Tmd7tgLXXmgh1bPajPsho5kW29t7IZZV+KBWRw7u+PmiLH0OfpdnX2GPqLj1oKLCsagGWuaOAdatToFdgeKoZc1zbMZe0Te6cMsT7/Hsk/PWpuuotMOXV+NG1NCT/3W5mEY1tWB18BKIXdhvxZOzN56Zw30fO5qGyWcbKDutHeiM1+ZQlkK2QhxMF/m8pE/5Hawf7rdaItK3QNN9kSBFPkByVKYBTGuYjxHAegVE+SmKLupC9qdHDKHztwSh0WystE4siCO64fVYLZ3amVEd9z1zmV4bSw9AQokaewiQpCnBSSL09JEhEAfEdD86SsFMDpkr77dqrEUWAUpyWY4T8IYem+mvn2ErhvnOJuU2FWrA0pBk3kPoywLsE8qGXMMU3cdFEhdw4yA5gqGBJ0o4KEicFGFBxZojZJ0+zyNd8JAZS0vbY0WfkV5HePXlMZK4jhO4B8dBL3HmufCx4bDrB6RK3grhpMadY8BFAjuI1P9800HlbKlz7iERvl4PK8lopjtwpTXCrrQby68So9S5IFmluaIAg50t3kyjbcIfw93xND2ZLAlrGhYu025x6MjqVlWGC8/4L5aCpov72tKjb0KT1Z7rZbcWAAKRLcODKqbc4IgcmJd4CVWaorCj+TLvhISJskXjDJAAQyrbHC9nH++Xs6/Xi/nP6v3D9fL+Zfr5fz39XL+/Xo5/3W9nH+7J/xRxSpKd7+qYh7KYBAS0ASqMafzJem0+1yNSeNORx75surL4N3ftzl5bUSWH4l7lU1GqL+irREpnKnuErxrSay4ayN/kEO9tzxseYV5+hcQ0ARx5MMtRGxdPARIJWJx1IxMzvNGFKtQ3i6khRA+bHJDcw7bpX4sBqPCWYe2Km9NZ8g7/cSLupKNu9GYEOwsdFMrjqr/VFV77bOPxepBHD+XScw3kmMshPxzQCvSjg/6PCe0CP0sx/xQWWp7faE4kTYqJBrCmomNFe48OCLeCuygrtZQfSYOTCWZIDlZtv37BN82SHjf3MFtuF7uXbkK0G0R3v36T1/fB4Q5UR8w7qv1W03oecyAyBmcaZsFzc4Mg2NKzeiKPt1Hu7UWt9IoUCPT7u89cDp9pUASwmwVpxFoAhI5EFAghCST3wd8GkSIZDBKQJOt87zQkHhWpEBUykkyyWD2theAXD2GdACnfwBwDV3yMggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Kalulu Sunday",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255626753818",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Kalulu-Bot,
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/6ro29d.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '2' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

