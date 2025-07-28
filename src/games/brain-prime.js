#!/usr/bin/env node

import readlineSync from 'readline-sync'

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  const arr = []
  for (let i = 0; i <= number; i += 1) {
    if (number % i === 0) {
      arr.push(i)
    }
  }
  if (arr.length === 2) {
    return 'yes'
  }
  else {
    return 'no'
  }
}

export const primeGame = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1
  console.log(`Question: ${randomNumber}`)
  const answer = readlineSync.question('You answer: ')
  const result = isPrime(randomNumber)
  return { result, answer }
}
