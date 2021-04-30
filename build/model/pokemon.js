"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Pokemon.FirstToAttack = function (poke1, poke2) {
        if (poke1.speed > poke2.speed) {
            return poke1;
        }
        else {
            return poke2;
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map