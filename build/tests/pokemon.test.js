"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
describe("pokemon attack test", function () {
    var pika;
    var draco;
    beforeEach(function () {
        pika = new model_1.Pokemon("pikachu", 20, 100, 20, 10);
        draco = new model_1.Pokemon("dracofeu", 10, 100, 20, 10);
    });
    it("faster pokemon should attack first", function () {
        expect(model_1.Pokemon.FirstToAttack(pika, draco)).toBe(pika);
    });
    it('pikachu should beat dracofeu', function () {
        pika.fight(draco);
        expect(draco.hp).toBe(0);
    });
});
//# sourceMappingURL=pokemon.test.js.map