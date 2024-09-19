class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

    console.log(`${this.#brand} ${this.#model} ${this.speed}km/h trunk:${trunkStatus}`);
  }

  go() {
    this.speed += 5;
    
    if (this.speed > 200) {
      this.speed = 200;
    }
  }

  brake() {
    this.speed -= 5;

    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class raceCar extends Car {
 acceleration;

    constructor(carDetails) {
    super(carDetails)
    this.acceleration = carDetails.acceleration;   
    }

    go() {
      this.speed += this.acceleration;

      if (this.speed > 300) {
        this.speed = 300;
      }
    }

    openTrunk() {
      console.log('Race cars do not have a trunk.');
    }

    closeTrunk() {
      console.log('Race cars do not have a trunk.');
    }
}

const car3 = new raceCar({
  brand: 'maLaren',
  model: 'F1',
  acceleration: 20
});
car3.go();
car3.go();
car3.go();
car3.brake();
car3.displayInfo();

console.log(car3);

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

console.log(car1);
console.log(car2);

car1.go();
car1.go();
car1.brake();
// Trunk should not open since the car is moving.
car1.openTrunk();

car2.go();
car2.brake();
car2.brake();
car2.go();
car2.brake();
// Trunk should be opened since the car is not moving.
car2.openTrunk();

car1.displayInfo();
car2.displayInfo();