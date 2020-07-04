const text = 'Hola Mundo'
const fruits = ['manzana', 'melon', 'banana']
const numbr = 10
const bool = true

describe('Variable text', () => {
	test('Debe contener un Mundo', () => {
		expect(text).toMatch(/Mundo/)
	})
})

describe('Variable fruits', () => {
	test('Tenemos una banana', () => {
		expect(fruits).toContain('banana')
	})
	test('No tenemos un mango', () => {
		expect(fruits).not.toContain('mango')
	})
})

describe('Variable numbr', () => {
	test('Mayor que 9', () => {
		expect(numbr).toBeGreaterThan(9)
	})
})

describe('Variable bool', () => {
	test('Es verdadero', () => {
		expect(bool).toBeTruthy()
	})
})

const reverseString = (str, callback) => {
	callback(str.split('').reverse().join(''))
}

describe('Funcion reverseString', () => {
	test('Probar un callback', () => {
		reverseString('Hola', (str) => {
			expect(str).toBe('aloH')
		})
	})
})
