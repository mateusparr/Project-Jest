const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  it('atende', async () => {
    const answer = await answerPhone('Olá');
    expect(answer).toEqual('Oi!');
  });

  it('ocupado', async () => {
    try {
      await answerPhone();
    } catch (e) {
      expect(e.message).toEqual('Infelizmente não podemos atender...');
    }
  });
});
