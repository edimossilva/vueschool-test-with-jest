import Car from '../../../../src/chapters/chapter2/lessons/Car'

describe('Car',() => {
  test('constructor', () => {
    expect(new Car).toBeInstanceOf(Car)
  });

  test('model structure', () => {
    expect(new Car).toEqual(
      expect.objectContaining({
        $collection: expect.any(Array),
        record: expect.any(Function),
        find: expect.any(Function),
        all: expect.any(Function),
        update: expect.any(Function),
      })
    );
  });

  describe('record', () => {
    const heroes = [{name: 'Batamn'}, {name: 'Black Panther'}]
    test('add data to collection',() => {
      const car = new Car();
      car.record(heroes);
      expect(car.$collection).toEqual(heroes);
    })

    test('called on constructor',() => {
      const spy = jest.spyOn(Car.prototype, 'record');
      const car = new Car(heroes);
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    })

  })

});

