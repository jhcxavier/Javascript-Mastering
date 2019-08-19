//'use strict';

const warrior = {
    name: 'Jujin Take',
    type: 'Ninja',
    weapon: 'Shuriken',
    agility: 79
} //this is globally scoped

//globally scope
const screamWarrior = () => {
    let warrior2 = 'Samurai';
    warrior3 = 'Viking';


    warrior3 = 'Viking'; // if do not add const, var or let the variable will be globally scope.
    return {
        shootWarrior: () => {
            return console.log(warrior, warrior2);
        }
    }
}
const newWarrior = screamWarrior();

newWarrior.shootWarrior();

console.log(warrior, warrior3)



// var warrior; // warrior is declared here...


// var warrior3;//will show undefined

//** Challange 1**
let warriors4 = ['ninja', 'samurai', 'viking'];

const callWarrior = () => {

    return  console.log(warriors4);
}
callWarrior();
//________________________________________________________


const screamWarrior = () => {
    var warrior1 = 'Ninja';
    let warrior2 = 'Samurai';

    return `our warriors are ${warrior1} and ${warrior2}`;
}
const screamWarrior2 = () => {
    var warrior1 = 'Viking';
    let warrior2 = 'Soldier';

    return `our warriors are ${warrior1} and ${warrior2}`;
}
console.log(screamWarrior(), screamWarrior2());
//warrior1 & warrior2 are not available globlly
//console.log(warrior1, warrior2);

//** Challange 2 **

const firstNumber = 200;

const multiply = () => {
    let secondNumber = 2;
    return console.log(firstNumber * secondNumber)
}
multiply();

//-----------------------------------------------------------

let warrior1 = 'Ninja';
const warrior2 = 'Viking';

console.log(warrior1, warrior2);

//this will return an error
warrior1 = 'Samurai';
console.log(warrior1);

const screamWarrior = () =>{
    let warrior4 = 'Cannnon Shooter';
    if (warrior2 == 'Viking'){
        let warrior3 = 'Infatry Soldier';
        console.log(`Our army consist of ${warrior1}, ${warrior2} and ${warrior3} `)
    }
  console.log(warrior4);
}
screamWarrior();
//console.log(warrior3);

const warriors5 = [
    {
        name: 'Naruto',
        type: 'Ninja',
        agility: 89
    },
    {
        name: 'Ragnar Lotbrok',
        type: 'Viking',
        agility: 63
    },
    {
        name: 'Silvester',
        type: 'Soldier',
        agility: 71
    }
];

const screamWarrior = () => {
    console.log(warriors5)

    warriors5.map((warrior)=>{
        if(warrior.agility ===63){
            let agility = warrior.agility;
            console.log(`${warrior.name}, who is a ${warrior.type} has an agility of ${agility}`)
        }

    })

}
screamWarrior();

