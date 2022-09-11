import { Character } from './Character.js';

export class Magician extends Character {
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
export const magician = new Magician('Витя', 'Magician', 100, 1, 10, 40);