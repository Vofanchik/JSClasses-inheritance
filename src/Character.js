// Character.js

class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
    if (typeof name !== 'string' || typeof type !== 'string') {
      throw new Error('Name and type should be strings');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name length should be between 2 and 10 characters');
    }
   
    if (!types.includes(type)) {
      throw new Error('Invalid type');
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }


  damage(points) {
    this.health -= Math.min(points * (1 - this.defence / 100), this.health);
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("Нельзя повысить level умершего!")
  }
    this.level += 1;
    this.attack = this.attack * 1.2;
    this.defence = this.defence * 1.2;
    this.health = 100;
  }
};

module.exports = Character;






