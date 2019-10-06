const user = {
  name: 'Edimo Sousa Silva',
  age: 28,
  job: 'Developer'
};

test('user matches',() => {
  expect(user).toMatchSnapshot();
});