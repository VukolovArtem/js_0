'use strict';

function Car(
  model,
  color, 
  releaseYear, 
  speed, 
  maxSpeed, 
  fuelConsumption, 
  volume)
  {
  this.model = model;
  this.color = color;
  this.releaseYear = releaseYear;
  this.speed = speed;
  this.maxSpeed = maxSpeed;
  this.fuelConsumption = fuelConsumption;
  this.volume = volume;
}

function CarPrototype(){
  this.disperse = function(){
    if (this.speed<this.maxSpeed){
      this.speed=this.speed+80;
      return this.speed;
    } else{ return 'MAX'};
  }
  this.stop = function(){
    if (this.speed>this.maxSpeed){
      this.speed=this.speed+80;
      return this.speed;
    } else{ return 'MAX'};
  }
  this.brake = function(){
    return this.speed = 0;
  }
}

Car.prototype = new CarPrototype();

const car1 = new Car('Zaporozhecy', 'red', 1895, 0, 90, 12, 35);