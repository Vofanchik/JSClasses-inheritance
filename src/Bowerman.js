//Bowerman.js

// Импортируем родительский класс Character
const Character = require('./Character');
class Bowerman extends Character{
    constructor(name, type) {
      if (typeof name !== 'string' || typeof type !== 'string') {
        throw new Error('Name and type should be strings');
      }
      if (name.length < 2 || name.length > 10) {
        throw new Error('Name length should be between 2 and 10 characters');
      }
      if (type !== 'Bowerman') {
        throw new Error('Invalid type');
      }
      super(name, type);
      this.health = 100;
      this.level = 1;
      this.attack = 25;
      this.defence = 25;
    }
  
    // Дополнительные методы и свойства для класса Bowerman
  }
  
  module.exports = Bowerman;   