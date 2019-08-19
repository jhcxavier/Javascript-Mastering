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

let warriors4 = ['ninja', 'samurai', 'viking'];

const callWarrior = () => {

    return  console.log(warriors4);
}
callWarrior();

