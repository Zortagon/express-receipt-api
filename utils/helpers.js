const CryptoJS = require("crypto-js");

function generateHash(data) {
    const token = process.env.APP_TOKEN;

    const md5 = CryptoJS.MD5(JSON.stringify(data).toString());

    const jsonEncoded = JSON.stringify([data, { key: md5 + token }]);
    const base64encoded = btoa(jsonEncoded);

    return base64encoded;
}

module.exports = { generateHash };
