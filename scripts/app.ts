import { IJoke, IReport, IClimate, IFormated, MaybeILatLong } from './interface'

const button = document.querySelector<HTMLButtonElement>('.getJoke')
const containerJoke = document.querySelector<HTMLDivElement>('.containerjoke')
const title = document.querySelector<HTMLParagraphElement>('.titlejoke')

button?.addEventListener('click', printRandomJoke)

let reportedJokes: IReport[] = []

function getCurrentWeather(callback: Function): Promise<IClimate> {
  const latitude: Promise<IClimate> = navigator.geolocation.getCurrentPosition(
    (position): Promise<IClimate> => {
      return callback(
        fetchCurrentWeather([
          position.coords.latitude,
          position.coords.longitude,
        ])
      )
    }
  ) as unknown as Promise<IClimate>

  return latitude
}

async function fetchCurrentWeather(latLong: MaybeILatLong): Promise<void> {
  const [lat, long] = latLong as Array<Number>

  const currentWeather: IClimate = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fedca1624d38dda6a9594d7e3a842cc0&units=metric`
  )
    .then((res) => res.json())
    .then((data) => data)

  processCurrentWeather(currentWeather)
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

async function processCurrentWeather(currentWeather: IClimate): Promise<void> {
  const clima: IClimate = currentWeather

  const { main, name, weather, dt } = clima

  const { feels_like, temp, temp_max, temp_min } = main

  const { id, main: current, description, icon } = weather[0]

  const formated = {
    name,
    feels_like,
    temp,
    temp_max,
    temp_min,
    id,
    main: current,
    description,
    icon,
    dt,
  }

  printCurrentWeather(formated)
}

function printCurrentWeather({
  name,
  feels_like,
  temp,
  temp_max,
  temp_min,
  id,
  main,
  description,
  icon,
}: IFormated): void {
  //a dt le faltan 3 numeros y no da la fecha bien...
  const climaDiv = document.querySelector<HTMLDivElement>('.clima')
  const todayDate: Date = new Date(Date.now()) //falta formatearla bien
  //const separatedDate: Array<string> = todayDate.splice

  const iconCode: string = `http://openweathermap.org/img/w/${icon}.png`

  climaDiv?.setAttribute(
    'style',
    `background-image:url(${iconCode}); background-repeat:no-repeat;background-position: right center`
  )

  const html: HTMLDivElement | string = `
      <h2 class="is-size-3"> 
          ${name}
      </h2>
    
      <small>
           ${todayDate}
      </small>

      <h4>
          ${main}
      </h4>

      <p class="is-size-4">
          ${temp}°
      </p>

      <p class="is-size-7">
          Feels like: ${feels_like}°
      </p>

      <p class="is-size-6">
          ${temp_min}° / ${temp_max}°
      </p>
  `

  climaDiv?.insertAdjacentHTML('beforeend', html)
}

getCurrentWeather((latLong: Promise<IClimate>) => latLong)
