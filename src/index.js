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

module.exports = randomString
