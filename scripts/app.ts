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

interface IReport {
  joke: String
  date: Number
  points: Number
}

let reportedJokes: IReport[] = []

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
  const jokeObj: IJoke = await fetchRandomJoke()

  const { id, joke } = jokeObj

  const jokeReport: IReport = {
    joke: joke,
    date: Date.now(),
    points: 1,
  }

  let setPoint: string[] = ['1', '2', '3']

  const allButtons: NodeList = document.querySelectorAll(
    'button[data-type="points"]'
  )

  allButtons.forEach((button: Node) =>
    pointsButtonContainer?.removeChild(button)
  )

  setPoint.forEach((point: string) => {
    let pointsButton: HTMLButtonElement = document.createElement('button')
    pointsButton.textContent = point
    pointsButton.setAttribute('value', point)
    pointsButton.setAttribute('data-type', 'points')
    pointsButton.addEventListener('click', (e) => setPoints(e, jokeReport))
    pointsButtonContainer?.appendChild(pointsButton)
  })

  const checkIfJoke: Element | undefined | null = containerJoke?.children[2]

  const jokeInDOM: HTMLParagraphElement = document.createElement('p')

  const textJoke: Text = document.createTextNode(`${id}     ${joke}`)

  jokeInDOM.appendChild(textJoke)

  if (checkIfJoke?.tagName === 'BUTTON') {
    if (button) button.textContent = 'next'
    if (title) title.textContent = 'Haha'
    button?.insertAdjacentElement('beforebegin', jokeInDOM)
  } else {
    if (checkIfJoke) containerJoke?.replaceChild(jokeInDOM, checkIfJoke)
  }
}

function setPoints(e: Event, jokeReported: IReport): void {
  let realReport: IReport = {
    ...jokeReported,
    points: parseInt((<HTMLButtonElement>e.target).value),
  }

  generateReport(realReport)
}

function generateReport(joke: IReport): void {
  const found: any = reportedJokes.find(
    (evaluatedJoke) => evaluatedJoke.joke === joke.joke
  )

  const flag: number = reportedJokes.indexOf(found)

  if (!found) {
    reportedJokes = [...reportedJokes, joke]
    console.log(2)
  } else {
    let edited = { ...found, points: joke.points }

    let restJokes = reportedJokes.slice(flag + 1, reportedJokes.length)
    restJokes = [edited, ...restJokes]
    reportedJokes = [...reportedJokes.slice(0, flag), ...restJokes]
  }

  console.log(reportedJokes)
}
