const button = document.querySelector<HTMLButtonElement>('.getJoke')
const containerJoke = document.querySelector<HTMLDivElement>('.containerjoke')

const title = document.querySelector<HTMLParagraphElement>('.titlejoke')

button?.addEventListener('click', printRandomJoke)

interface IJoke {
  id: string
  joke: string
  status: number
}

function fetchRandomJoke(): Promise<IJoke> {
  const URL: string = 'https://icanhazdadjoke.com'

  const options: object = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }

  const jokes: IJoke | Promise<IJoke> = fetch(URL, options)
    .then((res) => res.json())
    .then((data) => data)

  return jokes
}

async function printRandomJoke(): Promise<void> {
  const jokeObj = await fetchRandomJoke()
  const { id, joke } = jokeObj

  const checkIfJoke: Element | undefined | null = containerJoke?.children[1]

  const jokeInDOM: HTMLParagraphElement = document.createElement('p')

  const textJoke: Text = document.createTextNode(`${id}     ${joke}`)

  jokeInDOM.appendChild(textJoke)

  console.dir(checkIfJoke?.tagName)

  if (checkIfJoke?.tagName === 'BUTTON') {
    if (button) button.textContent = 'next'
    if (title) title.textContent = 'Haha'
    button?.insertAdjacentElement('beforebegin', jokeInDOM)
  } else {
    if (checkIfJoke) containerJoke?.replaceChild(jokeInDOM, checkIfJoke)
  }
}
