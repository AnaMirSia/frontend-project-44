#!/usr/bin/env node

import readlineSync from 'readline-sync';



const gcdGame = () => {

  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Find the greatest common divisor of given numbers.');

  for(let i = 0; i < 3; i += 1) {

    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 150) + 1;
        
    const numbers = `${a} ${b}`;
    console.log(`Question: ${numbers}`);
    const answer = readlineSync.question('You answer: ');

    const nod = (a, b) => {
      while(b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };

    if(nod(a,b) === Number(answer)){
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${nod(a,b)}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

  }
  console.log(`Congratulations, ${name}!`);
};

gcdGame();