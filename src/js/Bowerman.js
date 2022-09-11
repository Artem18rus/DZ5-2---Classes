import { Character } from './Character.js';

export class Bowerman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = (function func() {
      if (typeof type === 'string') {
        return type;
      }
      throw new Error('Некорректное значение "type"!');
    }());
    this.attack = attack;
    this.defence = defence;
  }
}
export const bowerman = new Bowerman('Витя', 'Bowman', 100, 1, 25, 25);