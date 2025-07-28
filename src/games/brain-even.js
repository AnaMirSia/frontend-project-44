import readlineSync from 'readline-sync'

export const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (number) => {
  return number % 2 === 0
}

export const evenGame = () => {
  const randomNumber1 = Math.floor(Math.random() * 50) + 1
  console.log(`Question: ${randomNumber1}`)
  const answer = readlineSync.question('You answer: ')
  const result = isEven(randomNumber1) ? 'yes' : 'no'
  return { result, answer }
}
