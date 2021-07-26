const button = document.querySelector<HTMLButtonElement>('.getJoke')
const containerJoke = document.querySelector<HTMLDivElement>('.containerjoke')
const pointsButtonContainer =
  document.querySelector<HTMLDivElement>('.pointsButtons')

const title = document.querySelector<HTMLParagraphElement>('.titlejoke')

button?.addEventListener('click', printRandomJoke)

interface IJoke {
  id: string
  joke: string
  status: number
}

let reportedJokes: Object[] = []

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

let points = 1

async function printRandomJoke(): Promise<void> {
  const jokeObj = await fetchRandomJoke()
  interface IReport {
    joke: String
    date: Number
    points: Number
  }
  const { id, joke } = jokeObj

  const jokeReport: IReport = {
    joke: joke,
    date: Date.now(),
    points: points,
  }

  let setPoint: string[] = ['1', '2', '3']

  if (!pointsButtonContainer?.children.length) {
    setPoint.forEach((point) => {
      let pointsButton: HTMLButtonElement = document.createElement('button')
      pointsButton.textContent = point
      pointsButton.setAttribute('value', point)
      pointsButton.addEventListener('click', (e) => setPoints(e, jokeReport))
      pointsButtonContainer?.appendChild(pointsButton)
    })
  }

  const checkIfJoke: Element | undefined | null = containerJoke?.children[2]

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

function setPoints(e: Event, jokeReport: Object): void {
  // se
  const realReport: Object = {
    ...jokeReport,
    points: (<HTMLButtonElement>e.target).value,
  } // si le doy varias veces a un boton se añaden tantas veces en el reportedArray

  generateReport(realReport)
}

function generateReport(joke: Object): void {
  reportedJokes = [...reportedJokes, joke]
}
