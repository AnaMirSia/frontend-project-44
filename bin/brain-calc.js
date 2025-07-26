#!/usr/bin/env node

import readlineSync from 'readline-sync'

const calcGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}`)
  console.log('What is the result of the expression?')

  for (let i = 0; i < 3; i += 1) {
    const operators = ['+', '-', '*']
    const index = Math.floor(Math.random() * operators.length)

    const randomNumber1 = Math.floor(Math.random() * 15) + 1
    const randomNumber2 = Math.floor(Math.random() * 10) + 1

    const example = `${randomNumber1} ${operators[index]} ${randomNumber2}`
    console.log(`Question: ${example}`)
    const answer = readlineSync.question('You answer: ')
    const result = new Function(`return ${example}`)()

    if (result === Number(answer)) {
      console.log('Correct!')
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${result}'`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

calcGame()
