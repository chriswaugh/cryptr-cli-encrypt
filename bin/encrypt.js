#!/usr/bin/env node

try {
    const args = process.argv.slice(2);

    const encryptionKey = args[0];
    const input = args[1];

    const Cryptr = require('cryptr');
    const cryptr = new Cryptr(encryptionKey);

    const encrypted = cryptr.encrypt(input);

    console.log(encrypted);
}
catch (e) {
    console.error('Invalid arguments');
    process.exit(1)
}