describe('Counter',() => {
  let counter;
  beforeEach(() => {
    counter = 0;
  });

  test('sums small number', () => {
    counter += 10;
    expect(counter).toBe(10);
  });

  test('sums big number', () => {
    counter += 100;
    expect(counter).toBe(100);
  });
});