const cities = [
	'Ciudad de México',
	'Bogotá',
	'Lima',
	'Buenos Aires',
	'Guadalajara'
]

function randomString() {
	const str = cities[Math.floor(Math.random() * cities.length)]
	return str
}

const reverseString2 = str =>
	new Promise((resolve, reject) => {
		if (!str) reject(Error('Error'))

		resolve(str.split('').reverse().join(''))
	})

module.exports = {
	randomString,
	reverseString2
}
