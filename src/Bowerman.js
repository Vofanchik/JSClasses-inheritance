//Bowerman.js

// Импортируем родительский класс Character
const Character = require('./Character');
class Bowerman extends Character{
    constructor(name, type) {
      super(name, type);
      this.attack = 25;
      this.defence = 25;
    }
  
    // Дополнительные методы и свойства для класса Bowerman
  }
  
  module.exports = Bowerman;   