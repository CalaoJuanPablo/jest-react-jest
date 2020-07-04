const text = 'Hola Mundo'
const fruits = ['manzana', 'melon', 'banana']
const numbr = 10
const bool = true

describe('Tests globales', () => {
	beforeAll(() => console.log('Antes de todas las pruebas'))
	beforeEach(() => console.log('Antes de cada prueba'))
	afterAll(() => console.log('Después de todas las pruebas'))
	afterEach(() => console.log('Después de cada prueba'))

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
			reverseString('Hola', str => {
				expect(str).toBe('aloH')
			})
		})
	})

	const reverseString2 = str =>
		new Promise((resolve, reject) => {
			if (!str) reject(Error('Error'))

			resolve(str.split('').reverse().join(''))
		})

	describe('Funcion reverseString2', () => {
		test('Probar una promesa', () => {
			reverseString2('Hola').then(str => expect(str).toBe('aloH'))
		})

		test('Probar una promesa con async/await', async () => {
			const str = await reverseString2('Hola')
			expect(str).toBe('aloH')
		})
	})
})
