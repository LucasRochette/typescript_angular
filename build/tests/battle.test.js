"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
describe("Async fight between pokemons", function () {
    var pika = new model_1.Pokemon("pikachu", 20, 100, 20, 10);
    var draco = new model_1.Pokemon("dracofeu", 10, 100, 20, 10);
    var battle = new model_1.Battle(pika, draco);
    it("Pika should win", function () {
        expect(battle.fight()).toEqual(pika);
    });
});
//# sourceMappingURL=battle.test.js.map