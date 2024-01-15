// Bowerman.test.js

const Bowerman = require('../src/Bowerman');

describe('Bowerman class', () => {
  test('should create a Bowerman object with correct name and default properties', () => {
    const bowerman = new Bowerman('John');
   // console.log(bowerman);
    expect(bowerman.name).toBe('John');
    expect(bowerman.type).toBe('Bowerman');
    expect(bowerman.health).toBe(100);
    expect(bowerman.level).toBe(1);
    expect(bowerman.attack).toBe(25);
    expect(bowerman.defence).toBe(25);
    // Проверка атаки и защиты зависит от типа, оставьте это для конкретных классов
  });

  test('should throw an error if provided with incorrect values', () => {
    expect(() => new Bowerman('Jo', 'Warrior')).toThrowError('Name length should be between 2 and 10 characters');
  });
   
  
  test('should throw an error if provided with an invalid name', () => {
    expect(() => new Bowerman('V')).toThrowError('Name length should be between 2 and 10 characters');
  });
  // Добавьте больше тестов для проверки общих свойств и методов Bowerman
  test('should create a  Bowerman object with a valid name', () => {
    expect(() => new  Bowerman('ValidName', 'SomeType')).toThrowError('Invalid type');
  });

  test('should throw an error if name or type is not a string', () => {
    expect(() => new Bowerman(123, 'Warrior')).toThrowError('Name and type should be strings');
    expect(() => new Bowerman('Jo', 456)).toThrowError('Name and type should be strings');
  });
  
  test('should throw an error if provided with incorrect name length', () => {
    expect(() => new Bowerman('J', 'Warrior')).toThrowError('Name length should be between 2 and 10 characters');
  });
  
  test('should throw an error if provided with incorrect type length', () => {
    expect(() => new Bowerman('John', 'W')).toThrowError('Type length should be between 2 and 10 characters');
  });

  test('should throw an error if provided with incorrect values', () => {
    expect(() => new Bowerman('Jo', undefined)).toThrowError('Name length should be between 2 and 10 characters');
  });
  
  test('should throw an error if provided with an invalid name', () => {
    expect(() => new Bowerman(undefined, 'Bowerman')).toThrowError('Name and type should be strings');
  });
});






