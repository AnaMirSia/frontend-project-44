
import readlineSync from 'readline-sync'
// в этом коде не выводится имя игрока 
const greeting = () => {
  console.log("Welcome to the Brain Games!")
}

const userName = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}`)
  return name
}

const winning = (name) => {
  console.log(`Congratulations, ${name}!`)
}


const loss = (name) => {
  console.log(`Let's try again, ${name}!`)
}


export {greeting, userName, winning, loss}