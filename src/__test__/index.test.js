const { randomString } = require('../index')

describe('Funcionalidades de función randomString', () => {
	test('Probar la funcionalidad', () => {
		expect(typeof randomString()).toBe('string')
	})

	test('Comprobar que no existe una ciudad', () => {
		expect(randomString()).not.toMatch(/Cordoba/)
	})
})
