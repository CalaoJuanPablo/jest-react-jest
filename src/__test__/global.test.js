const text = 'Hola Mundo'

describe('Variable text', () => {
	test('Debe contener un Mundo', () => {
		expect(text).toMatch(/Mundo/)
	})
})
