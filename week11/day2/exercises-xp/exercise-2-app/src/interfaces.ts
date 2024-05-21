interface Vehicle {
    make: string;
    model: string;
    start(): string;
  }
  
  interface Car extends Vehicle {
    numberOfDoors: number;
  }
  
  export {Vehicle, Car};
  
  