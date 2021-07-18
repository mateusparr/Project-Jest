const mockFunctions = require('../src/mockFunctions');

jest.mock('../src/mockFunctions');

describe('verifica as funções e os mocks', () => {
  const sum = mockFunctions.add.mockImplementation((a, b) => a + b);
  const sub = mockFunctions.subtract.mockImplementation((a, b) => a - b);
  const mult = mockFunctions.multiply.mockImplementation((a, b) => a * b);
  const divis = mockFunctions.divide.mockImplementation((a, b) => a / b);
  const exp = mockFunctions.power.mockImplementation((a, b) => a ** b);
  const factor = mockFunctions.factorial.mockImplementation((x) => {
    let result = 1;
    for (let count = 1; count <= x; count += 1) {
      result *= count;
    }
    return result;
  });

  it('testa função add', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(8, 37)).toEqual(45);
    expect(sum(-11, 25)).toEqual(14);
    expect(sum(13, -188)).toEqual(-175);
    expect(sum(7, 26)).toEqual(33);
  });

  it('testa função subtract', () => {
    expect(sub(899, 35)).toEqual(864);
    expect(sub(-17, 333)).toEqual(-350);
    expect(sub(45, 97)).toEqual(-52);
    expect(sub(23, -108)).toEqual(131);
    expect(sub(-133, -29)).toEqual(-104);
  });

  it('testa função multiply', () => {
    expect(mult(1, 2)).toEqual(2);
    expect(mult(0, 5)).toEqual(0);
    expect(mult(-4, 9)).toEqual(-36);
    expect(mult(-12, -7)).toEqual(84);
    expect(mult(19, 23)).toEqual(437);
  });

  it('testa função divide', () => {
    expect(divis(169, 13)).toEqual(13);
    expect(divis(-1900, 5)).toEqual(-380);
    expect(divis(42, 7)).toEqual(6);
    expect(divis(729, 243)).toEqual(3);
    expect(divis(1331, 11)).toEqual(121);
  });

  it('testa função power', () => {
    expect(exp(10, 2)).toEqual(100);
    expect(exp(2, 10)).toEqual(1024);
    expect(exp(5, 5)).toEqual(3125);
    expect(exp(1, 10)).toEqual(1);
    expect(exp(0, 0)).toEqual(1);
  });

  it('testa função factorial', () => {
    expect(factor(5)).toEqual(120);
    expect(factor(10)).toEqual(3628800);
    expect(factor(3)).toEqual(6);
    expect(factor(8)).toEqual(40320);
    expect(factor(2)).toEqual(2);
  });
});
