"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
describe("pokemon attack test", function () {
    var pika = new model_1.Pokemon("pikachu", 20);
    var draco = new model_1.Pokemon("dracofeu", 10);
    it("faster pokemon should attack first", function () {
        expect(model_1.Pokemon.FirstToAttack(pika, draco)).toBe(pika);
    });
});
//# sourceMappingURL=pokemon.test.js.map