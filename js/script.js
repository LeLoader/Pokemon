"use strict";

class Pokemon{ 
    constructor(name = ChooseName(), attack = ChooseAttack(), defense = ChooseDefense(), hp = ChooseHp(), luck = ChooseLuck()){ //Si pas d'argument, valeurs automatiques
        this.name = name; 
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }
    isLucky(){ //Bool isLucky, si la luck est superieur à un nombre aléatoire, alors le pokémon attaque
        if (this.luck > Math.random()){
            return true;
        }
        else{
            return false;
        }
    }
    attackPokemon(enemy){ //Calcul dégats entre pokemon et enemy
        if (this.isLucky() == true){
            let damage = this.attack - enemy.defense;
            enemy.hp -= damage;
            console.log(`${this.name} attaque ${enemy.name}... et lui inflige ${damage} dégats! Il lui reste ${Math.max(enemy.hp,0)}HP`);
            }
        else{
            console.log(`${this.name} attaque ${enemy.name}... mais rate son attaque.`);
        }
    }
}



function ChooseName(){ //Choisi un nombre parmi un array
    let pokemonNames = ["Pikachu", "Salamèche", "Carapuce", "Bulbizarre"];
    return pokemonNames[Math.floor(Math.random()*pokemonNames.length)];
}

function ChooseAttack(){ //Choisi un attaque entre 15 et 29
    return Math.floor(Math.random()*15+15);
}

function ChooseDefense(){ //Choisi un défense entre 5 et 14
    return Math.floor(Math.random()*10+5);
}

function ChooseHp(){
    return Math.floor(Math.random()*100+50); //Choisi un nombre d'hp entre 50 et 149
}

function ChooseLuck(){ //Choisi un luck (précision) entre 0.2 et 0,9(barre genre 0,9999...)
    let luck;
    while (luck <= 0.2);{
        luck = Math.random();
    }
    return luck;
}


function Fight(pokemon1 = new Pokemon(), pokemon2 = new Pokemon()){ //Lance le combat entre les deux pokemons choisi, si jamais aucun n'est choisi alors 2 instances aléatoires de pokémon sont créées
    console.log(pokemon1); //Voir les stats des pokémons
    console.log(pokemon2); //
    alert(`${pokemon1.name} VS ${pokemon2.name}`); //Pause la page pour voir qui affronte qui
        let attacking = Math.floor(Math.random()); //Variable qui permet de choisir qui attaque
    while (pokemon1.hp > 0 && pokemon2.hp > 0){
        if (attacking > 100){ //Voir dernier else{}
            break;
        }
        if (attacking%2 == 0){ //Qui commence (pair / impair)
            pokemon1.attackPokemon(pokemon2);
            attacking += 1;
        }
        else {
            pokemon2.attackPokemon(pokemon1);
            attacking += 1;
        }
    }

    if (pokemon1.hp <= 0){ //Pokemon 1 KO
        console.log(`${pokemon2.name} gagne ce combat avec ${pokemon2.hp}HP!`);
    }
    else if(pokemon2.hp <= 0){ //Pokemon 2 KO
        console.log(`${pokemon1.name} gagne ce combat avec ${pokemon1.hp}HP!`);
    }
    else{ //Si jamais pas assez de précision, le fight peut durer longtemps donc après 100 tours le fight se termine sur une égalité
        console.log("Vos pokémons sont trop fatigués pour continuer à se battre, égalité!");
    }
}