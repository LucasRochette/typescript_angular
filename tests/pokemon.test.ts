import { whoAttacksFirst } from './test';
import {Pokemon} from "../model";

var pika = new Pokemon("pikachu", 20);
var draco = new Pokemon("dracofeu",10)


test('whoAttackFirst', () => {
    expect(whoAttacksFirst(pika,draco)).toBe(pika);
});
