import Adder from './adder';

const adder = new Adder();

describe('testing app js', () => {
  it('should add 2 numbers', () => {
    expect(adder.add(1, 2)).toEqual(3);
  });
});
