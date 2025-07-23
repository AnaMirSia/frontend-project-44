#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (number) => {
   return number % 2 === 0
}

const roundGame = () => {

    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for(let i = 0; i < 3; i+=1){
    const getRandomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${getRandomNumber}`);
    const answer = readlineSync.question('You answer: ');
    const correct = isEven(getRandomNumber)? 'yes': 'no';

    if(answer === correct){
        console.log('Correct!')
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'`);
        console.log(`Lets try agan, ${name}!`);
        return
    }
}
 console.log(`Congratulations, ${name}!`)
}

roundGame()