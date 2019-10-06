import User from '../../../src/lessons/lesson-2/User'
describe('User',() => {
  test('name returns fullname', () => {
    const user = new User({firstName: 'Edimo', lastName: 'Sousa'});
    expect(user.name).toBe('Edimo Sousa');
  });
});