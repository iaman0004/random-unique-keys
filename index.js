function genrateKey(salt, length) {
	var salt_ascii = '';
	for (let i = 0; i < salt.length; i++) {
		salt_ascii += String(salt.charCodeAt(i));
	}
	while (salt_ascii < Math.pow(10, length)) {
		salt_ascii *= 9;
	}
	var min = Math.floor(Math.random() * (Number(salt_ascii / 2) - Math.pow(10, length)) + Math.pow(10, length));
	var max = Math.floor(Math.random() * (Number(salt_ascii) - Number(salt_ascii / 2) + Number(salt_ascii / 2)));
	return Math.floor(Math.random() * (max - min) + min) % Math.pow(10, length);
}

module.exports = { genrateKey };
