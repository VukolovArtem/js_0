// 'use strict';

// function Car(
//   model,
//   color,
//   releaseYear,
//   maxSpeed,
//   fuelConsumption,
//   volume)
//   {
//     if(typeof model!== 'string' || typeof color!== 'string'){
//       throw new TypeError('Enter strings');
//     }
//     this.model = model;
//     this.color = color;
//     this.releaseYear = releaseYear;
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.fuelConsumption = fuelConsumption;
//     this.volume = volume;

// }

// function CarPrototype(){
//   this.disperse = function(){
//     if (this.speed<this.maxSpeed){
//       this.speed=this.speed+80;
//       return this.speed;
//     } else{ return 'MAX'};
//   }
//   this.stop = function(){
//     if (this.speed>0){
//       this.speed=this.speed-1;
//       return this.speed;
//     } else{ return 'MIN'};
//   }
//   this.brake = function(){
//     return this.speed = 0;
//   }
// }

// Car.prototype = new CarPrototype();

// const car1 = new Car('Zaporozhets', 'red', 1895, 0, 90, 12, 35);
// const car2 = new Car('Mazda', 'black', 2005, 0, 230, 10, 45);
// const car3 = new Car('Tesla', 'black', 2021, 0, 400, 0, 0);
// const car4 = new Car(1, 2, 2021, 0, 400, 0, 0);

class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName = () => `${this.name} + ${this.surname}`;

  isAdult = () => this.age >= 18;
}

const user1 = new User("Vlad", "Gamma", 19);
const user2 = new User("Vlad", "Gamma", 10);
const user2 = new User(50, null, "10");
