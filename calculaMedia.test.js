const calculaMedia = require('./calculaMedia');

describe('Média genérica', () => {
  test('retorna a média de três números', () => {
    expect(calculaMedia(8, 9, 7)).toBe(8);
  });

  test('Média com um valor máximo', () => {
    expect(calculaMedia(10, 9, 5)).toBe(8);
  });

  test('Média com número real', () => {
    expect(calculaMedia(4.5, 9, 6)).toBe(6.5);
  });

  test('Média comvalores máximos', () => {
    expect(calculaMedia(10, 10, 10)).toBe(10);
  });

});