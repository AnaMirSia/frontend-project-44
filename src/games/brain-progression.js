#!/usr/bin/env node

import readlineSync from 'readline-sync'

export const description = 'What number is missing in the progression?'

export const progressionGame = () => {
  const arrProgression = () => {
    const startNumn = Math.floor(Math.random() * 5) + 1
    const step = Math.floor(Math.random() * 10) + 1
    const arr = []
    for (let i = 0; i < 10; i += 1) {
      arr.push(startNumn + step * i)
    }
    const passIndex = Math.floor(Math.random() * 10)
    const value = arr[passIndex]
    arr[passIndex] = '..'
    return {
      progression: arr.join(' '),
      result: value,
    }
  }
  const { progression, result } = arrProgression()

  console.log(`Question: ${progression}`)
  const answer = Number(readlineSync.question('You answer: '))

  return { result, answer }
}
