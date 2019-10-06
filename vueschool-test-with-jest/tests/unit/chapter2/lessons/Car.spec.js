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
    });

    test('called on constructor',() => {
      const spy = jest.spyOn(Car.prototype, 'record');
      const car = new Car(heroes);
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  describe('all', () => {
    const heroes = [{name: 'Batman'}, {name: 'Black Panther'}]

    test('returns empty car', () => {
      const car = new Car();
      expect(car.all()).toEqual([]);
      expect(car.all().length).toEqual(0);
    });

    test('returns not empty array', () => {
      const car = new Car(heroes);
      expect(car.all()).toEqual(heroes);
      expect(car.all().length).toEqual(2);
    });

    test('cant afect the data', () => {
      const car = new Car(heroes);
      const dataHeroes = car.all();
      dataHeroes[0].name = "Super man";
      expect(car.all()[0].name).toEqual("Batman");
    });
  });

  describe('find', () => {
    const heroes = [{id: 1, name: 'Batman'}, {id:2, name: 'Black Panther'}]
    const car = new Car(heroes);

    test('doesnt find', () => {
      expect(car.find(-1)).toEqual(null);
    });

    test('find', () => {
      expect(car.find(heroes[0].id)).toEqual(heroes[0]);
    });
  });

  describe('update', () => {
    let heroes
    let car
    beforeEach(() => {
      heroes = [{id: 1, name: 'Batman'}, {id:2, name: 'Black Panther'}]
      car = new Car(heroes);
    });

    test('an entry by id', () => {
      const newHero = {id: 3, name: 'Super Man'};
      car.update(heroes[0].id, newHero);
      expect(car.find(heroes[0].id)).toEqual(newHero);
    });

    test('extend an entry by id', () => {
      car.update(heroes[0].id, {cape: true});
      expect(car.find(heroes[0].id)).toEqual(
        expect.objectContaining({
          name: 'Batman',
          cape: true
        })
      )
    });
    test('returns false when record is not found', () => {
      const data = car.update(-1, {});
      expect(data).toBe(false);
    });
  });
});

