"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whoAttacksFirst = void 0;
function whoAttacksFirst(poke1, poke2) {
    if (poke1.speed >= poke2.speed) {
        return poke1;
    }
    return poke2;
}
exports.whoAttacksFirst = whoAttacksFirst;
//# sourceMappingURL=test.js.map