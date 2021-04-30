import {Pokemon} from "../model";



describe("pokemon attack test", () => {

    let pika: Pokemon;
    let draco: Pokemon;

    beforeEach(() => {
        pika = new Pokemon("pikachu", 20, 100, 20,10);
        draco = new Pokemon("dracofeu",10,100,20,10);
    })



    it("faster pokemon should attack first", () => {
        expect(Pokemon.FirstToAttack(pika,draco)).toBe(pika);
    });


    it('pikachu should beat dracofeu', () => {
        pika.fight(draco);
        expect(draco.hp).toBe(0);
    });

});
