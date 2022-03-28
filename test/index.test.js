const pegaArquivo = require('../index');

const arrayResultados = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]
describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResultados);
    })
    it('deve retornar "array vazio"', async () => {
        const resultado = await pegaArquivo('test/arquivos/texto2.md')
        expect(resultado).toBe('não há links')
    })
})
