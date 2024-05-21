class Person {
    private firstName: string;
    private lastName: string;
    public age: number;
    protected address: string;
  
    constructor(firstName: string, lastName: string, age: number, address: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
    }
  
    public getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  export default Person;
  