import {Pokemon,Battle} from "../model";

describe("Async fight between pokemons", () => {

    let pika = new Pokemon("pikachu", 20, 100, 20,10);
    let draco = new Pokemon("dracofeu",10,100,20,10);
    let battle = new Battle(pika,draco)


    it("Pika should win", () => {
        expect(battle.fight()).toEqual(pika);
    })

})
