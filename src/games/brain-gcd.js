#!/usr/bin/env node

import readlineSync from 'readline-sync'

export const description = 'Find the greatest common divisor of given numbers.'

const nod = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export const gcdGame = () => {
  const a = Math.floor(Math.random() * 100) + 1
  const b = Math.floor(Math.random() * 150) + 1

  const numbers = `${a} ${b}`
  console.log(`Question: ${numbers}`)
  const answer = Number(readlineSync.question('You answer: '))

  const result = nod(a, b)
  return { result, answer }
}

