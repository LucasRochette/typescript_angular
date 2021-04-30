export class Pokemon {

    name: string;
    speed: number;
    hp: number;
    attackValue: number;
    defenseValue: number;

    constructor(name,speed, hp, attack, defense) {
        this.name = name;
        this.speed = speed;
        this.hp = hp;
        this.attackValue = attack;
        this.defenseValue = defense;
    }

    static FirstToAttack(poke1: Pokemon, poke2: Pokemon) {
        if(poke1.speed >= poke2.speed)
        {
            return poke1;
        }
            return poke2;
    }

    attack(poke1 : Pokemon)
    {
        let damage = this.attackValue-poke1.defenseValue;
        poke1.hp -= damage;
    }

    fight(poke1: Pokemon)
    {
        if(Pokemon.FirstToAttack(this,poke1) == this)
        {
            while(this.hp > 0 && poke1.hp > 0)
            {
                this.attack(poke1);
                poke1.attack(this);
            }
        }
        else
        {
            while(this.hp > 0 && poke1.hp > 0)
            {
                poke1.attack(this);
                this.attack(poke1);
            }
        }

    }
}


