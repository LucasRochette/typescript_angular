"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
var pokemon_1 = require("./pokemon");
var Battle = /** @class */ (function () {
    function Battle(poke1, poke2) {
        this.poke1 = poke1;
        this.poke2 = poke2;
    }
    Battle.prototype.winner = function (first, second) {
        while (first.hp > 0 && second.hp > 0) {
            first.attack(second);
            second.attack(first);
        }
        if (first.hp > 0) {
            return first;
        }
        return second;
    };
    Battle.prototype.fight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var firstToAttack, secondToAttack;
            var _this = this;
            return __generator(this, function (_a) {
                firstToAttack = this.poke1;
                secondToAttack = this.poke2;
                if (pokemon_1.Pokemon.FirstToAttack(this.poke1, this.poke2) == this.poke2) {
                    firstToAttack = this.poke2;
                    secondToAttack = this.poke1;
                }
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(_this.winner(firstToAttack, secondToAttack));
                        }, 1000);
                    })];
            });
        });
    };
    return Battle;
}());
exports.Battle = Battle;
//# sourceMappingURL=battle.js.map