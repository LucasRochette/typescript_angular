"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("./test");
var model_1 = require("../model");
var pika = new model_1.Pokemon("pikachu", 20);
var draco = new model_1.Pokemon("dracofeu", 10);
test('whoAttackFirst', function () {
    expect(test_1.whoAttacksFirst(pika, draco)).toBe(pika);
});
//# sourceMappingURL=pokemon.test.js.map