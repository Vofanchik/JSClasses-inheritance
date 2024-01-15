// Character.test.js

const Character = require('../src/Character');

describe('Character class', () => {
  test('should create a Character object with correct name and default properties', () => {
    const character = new Character('John', 'Character');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Character');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
   
    // Проверка атаки и защиты зависит от типа, оставьте это для конкретных классов
  });

  test('should throw an error if provided with incorrect values', () => {
    expect(() => new Character('Jo', 'Warrior')).toThrowError('Name and type should be strings');
  });
  
  test('should throw an error if provided with an invalid name', () => {
    expect(() => new Character('V')).toThrowError('Name length should be between 2 and 10 characters');
  });
  test('should create a Character object with a valid name', () => {
    expect(() => new Character('ValidName', 'SomeType')).toThrowError('Invalid type');
  });

  test('should throw an error if name or type is not a string', () => {
    expect(() => new Character(123, 'Warrior')).toThrowError('Name and type should be strings');
    expect(() => new Character('Jo', 456)).toThrowError('Name and type should be strings');
  });
  
  test('should throw an error if provided with incorrect name length', () => {
    expect(() => new Character('J', 'Warrior')).toThrowError('Name length should be between 2 and 10 characters');
  });
  
  test('should throw an error if provided with incorrect type length', () => {
    expect(() => new Character('John', 'W')).toThrowError('Type length should be between 2 and 10 characters');
  });

});






