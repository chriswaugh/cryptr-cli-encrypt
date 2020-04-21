#!/usr/bin/env node

try {
    const args = process.argv.slice(2);

    const encryptionKey = args[0];
    const input = args[1];

    const Cryptr = require('cryptr');
    const cryptr = new Cryptr(encryptionKey);

    const decrypted = cryptr.decrypt(input);

    console.log(decrypted);
}
catch (e) {
    console.error('Invalid arguments');
    process.exit(1)
}