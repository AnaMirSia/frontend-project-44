#!/usr/bin/env node

import readlineSync from 'readline-sync'

const isPrime = (number) => {
  const arr = []
  for(let i = 0; i <= number; i += 1) {
    if(number % i === 0) {
      arr.push(i)
    }
  }
  if(arr.length === 2){
    return 'yes'
  } else {
    return 'no'
  }
}

const primeGame = () => {

  console.log("Welcome to the Brain Games!")
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}`)
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  for(let i = 0; i < 3; i += 1){
    const randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('You answer: ')

    if(answer === isPrime(randomNumber)){
      console.log('Correct!')
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(randomNumber)}'`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

primeGame()