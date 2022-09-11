import { Character } from './Character.js';

export class Swordsman extends Character {
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
export const swordsman = new Swordsman('Витя', 'Swordsman', 100, 1, 40, 10);