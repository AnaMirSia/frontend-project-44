#!/usr/bin/env node

import readlineSync from 'readline-sync'

const progressionGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}`)
  console.log ('What number is missing in the progression?')

  for (let i = 0; i < 3; i += 1) {
    const arrProgression = () => {
      const startNumn = Math.floor(Math.random() * 5) + 1
      const step = Math.floor(Math.random() * 10) + 1
      const arr = []
      for (let i = 0; i < 10; i += 1) {
        arr.push(startNumn + step * i)
      }
      const passIndex = Math.floor(Math.random() * 10)
      const result = arr[passIndex]
      arr[passIndex] = '..'
      return {
        progression: arr.join(' '),
        Value: result,
      }
    }
    const { progression, Value } = arrProgression()

    console.log(`Question: ${progression}`)
    const answer = readlineSync.question('You answer: ')

    if (Value === Number(answer)) {
      console.log('Correct!')
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${Value}'`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

progressionGame()
