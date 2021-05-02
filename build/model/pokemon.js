"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, hp, attack, defense) {
        this.name = name;
        this.speed = speed;
        this.hp = hp;
        this.attackValue = attack;
        this.defenseValue = defense;
    }
    Pokemon.FirstToAttack = function (poke1, poke2) {
        if (poke1.speed >= poke2.speed) {
            return poke1;
        }
        return poke2;
    };
    Pokemon.prototype.attack = function (poke1) {
        var damage = this.attackValue - poke1.defenseValue;
        poke1.hp -= damage;
    };
    Pokemon.prototype.fight = function (poke1) {
        if (Pokemon.FirstToAttack(this, poke1) == this) {
            while (this.hp > 0 && poke1.hp > 0) {
                this.attack(poke1);
                poke1.attack(this);
            }
        }
        else {
            while (this.hp > 0 && poke1.hp > 0) {
                poke1.attack(this);
                this.attack(poke1);
            }
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map