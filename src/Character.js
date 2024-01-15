// Character.js

class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || typeof type !== 'string') {
      throw new Error('Name and type should be strings');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name length should be between 2 and 10 characters');
    }
   
    if (type !== 'Character') {
      throw new Error('Invalid type');
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }


  damage(points) {
    this.health -= points;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  levelUp() {
    this.level += 1;
  }
};

module.exports = Character;






