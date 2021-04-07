import {Pokemon} from "../model";

export function whoAttacksFirst(poke1: Pokemon, poke2: Pokemon) {
    if(poke1.speed >= poke2.speed)
    {
        return poke1;
    }
    return poke2;
}

