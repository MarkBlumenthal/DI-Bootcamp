import type { Car } from './interfaces';

class Sedan implements Car {
  make: string;
  model: string;
  numberOfDoors: number;

  constructor(make: string, model: string, numberOfDoors: number) {
    this.make = make;
    this.model = model;
    this.numberOfDoors = numberOfDoors;
  }

  start(): string {
    return `${this.make} ${this.model} is starting.`;
  }
}

export default Sedan;


