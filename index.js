"use strict";
function generateKey(salt, length) {
    var salt_ascii = '';
    for (var i = 0; i < salt.length; i++) {
        salt_ascii += String(salt.charCodeAt(i));
    }
    var output = Number(salt_ascii);
    while (output < Math.pow(10, length)) {
        output *= 9;
    }
    var min = Math.floor(Math.random() * (output / 2 - Math.pow(10, length)) + Math.pow(10, length));
    var max = Math.floor(Math.random() * (output - output / 2 + output / 2));
    return Math.floor(Math.random() * (max - min) + min) % Math.pow(10, length);
}
module.exports = { generateKey: generateKey };
