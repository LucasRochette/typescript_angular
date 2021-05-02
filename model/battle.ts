import {Pokemon} from "./pokemon";

export class Battle {
    poke1: Pokemon;
    poke2: Pokemon;

    constructor(poke1: Pokemon, poke2: Pokemon) {
        this.poke1 = poke1;
        this.poke2 = poke2;
    }

    winner(first: Pokemon,second: Pokemon): Pokemon {
        while(first.hp > 0 && second.hp > 0)
        {
            first.attack(second);
            second.attack(first);
        }
        if(first.hp > 0)
        {
            return first;
        }
        return second;
    }

    async fight(): Promise<Pokemon> {
        let firstToAttack = this.poke1;
        let secondToAttack = this.poke2;

        if(Pokemon.FirstToAttack(this.poke1,this.poke2) == this.poke2)
        {
            firstToAttack = this.poke2;
            secondToAttack = this.poke1;
        }
        return new Promise<Pokemon>(resolve => {
            setTimeout(() => {
                resolve(this.winner(firstToAttack,secondToAttack))
            }, 1000);
        });
    }
}



