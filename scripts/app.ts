const button = document.querySelector<HTMLButtonElement>('.getJoke')
const containerJoke = document.querySelector<HTMLDivElement>('.containerjoke')

const title = document.querySelector<HTMLParagraphElement>('.titlejoke')

button?.addEventListener('click', printRandomJoke)

interface IJoke {
  id: string
  joke: string
  status: number
}

interface IReport {
  joke: String
  date: String
  points: Number
}

interface IClimate {
  base: String
  clouds: Object
  cod: Number
  coord: Object
  dt: Number
  id: Number
  main: IMain
  name: string
  sys: Object
  timezone: Number
  weather: Array<Object>
  wind: Object
}

interface IMain {
  feels_like: Number
  temp: Number
  temp_max: Number
  temp_min: Number
}

let reportedJokes: IReport[] = []

async function fetchCurrentWeather(): Promise<IClimate> {
  const currentWeather: Promise<IClimate> = fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=fedca1624d38dda6a9594d7e3a842cc0&units=metric'
  )
    .then((res) => res.json())
    .then((data) => data)

  console.log(typeof currentWeather)

  return currentWeather
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
  const jokeObj: IJoke = await fetchRandomJoke()

  const { id, joke } = jokeObj

  let today = new Date(Date.now()).toISOString()

  const jokeReport: IReport = {
    joke: joke,
    date: today,
    points: 1,
  }

  let setPoint: string[] = ['1', '2', '3']

  const buttonContainer: HTMLDivElement = document.createElement('div')

  const buttonContainerDOM: HTMLDivElement | null =
    document.querySelector('.button-container')

  const classesForButtonContainer: string[] = [
    'button-container',
    'is-flex',
    'is-justify-content-center',
    'is-align-items-center',
    'mt-3',
    'mb-3',
  ]

  buttonContainer?.classList.add(...classesForButtonContainer)

  const classesToAdd: string[] = ['button', 'is-info', 'mb-2', 'mr-2']

  const jokeContainer = document.querySelector<HTMLDivElement>('.joke')

  if (buttonContainerDOM)
    containerJoke?.replaceChild(buttonContainer, buttonContainerDOM)

  setPoint.map((point: string) => {
    let pointsButton: HTMLButtonElement = document.createElement('button')
    pointsButton.textContent = point
    pointsButton.setAttribute('value', point)
    pointsButton.classList.add(...classesToAdd)
    pointsButton.addEventListener('click', (e) => setPoints(e, jokeReport))
    buttonContainer.appendChild(pointsButton)
    jokeContainer?.insertAdjacentElement('afterend', buttonContainer)
  })

  const checkIfJoke: ChildNode | undefined | null = jokeContainer?.firstChild

  const jokeInDOM: HTMLParagraphElement = document.createElement('p')

  const textJoke: Text = document.createTextNode(joke)

  jokeInDOM.appendChild(textJoke)

  if (!jokeContainer?.firstChild) {
    if (button) button.textContent = 'next'
    if (title) title.textContent = 'Haha' //maybe a gif here
    jokeContainer?.appendChild(jokeInDOM)
  } else {
    if (checkIfJoke) jokeContainer?.replaceChild(jokeInDOM, checkIfJoke)
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
  } else {
    let edited = { ...found, points: joke.points }

    let restJokes = reportedJokes.slice(flag + 1, reportedJokes.length)
    restJokes = [edited, ...restJokes]
    reportedJokes = [...reportedJokes.slice(0, flag), ...restJokes]
  }

  console.log(reportedJokes)
}

async function printCurrentWeather(currentWeather: Promise<IClimate>) {
  const clima: IClimate = await currentWeather

  const { main, name, weather } = clima

  console.log(main, name, weather)
  /*  const { main, name, weather } = clima */

  let { feels_like, temp, temp_max, temp_min } = main

  console.log(clima)
}

printCurrentWeather(fetchCurrentWeather())
