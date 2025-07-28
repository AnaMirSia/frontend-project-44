import readlineSync from 'readline-sync'

export const description = 'What is the result of the expression?'

export function calcGame() {
  const operators = ['+', '-', '*']
  const index = Math.floor(Math.random() * operators.length)
  const randomNumber1 = Math.floor(Math.random() * 50) + 1 // я пыталась вынести эти константы, в отдельный файл, но в таком случае у меня каждый раз выходили одни и теже числа на 3 итерациях
  const randomNumber2 = Math.floor(Math.random() * 10) + 1
  const example = `${randomNumber1} ${operators[index]} ${randomNumber2}`
  console.log(`Question: ${example}`)
  const answer = Number(readlineSync.question('You answer: '))
  const result = new Function(`return ${example}`)()
  return { result, answer }
}

