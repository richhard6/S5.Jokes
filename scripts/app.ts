import {
  IJoke,
  IReport,
  IClimate,
  IFormated,
  MaybeILatLong,
  IReportedJokes,
} from './interface'
const todayDate: string = new Date(Date.now()).toLocaleString()

const button = document.querySelector<HTMLButtonElement>('.getJoke')
const containerJoke = document.querySelector<HTMLDivElement>('.containerjoke')
const title = document.querySelector<HTMLParagraphElement>('.titlejoke')
const ratedContainer = document.querySelector<HTMLDivElement>('.ratedJokes')
const jokeContainer = document.querySelector<HTMLDivElement>('.joke')
const climaDiv = document.querySelector<HTMLDivElement>('.clima')

button?.addEventListener('click', printRandomJoke)

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

  let today = new Date(Date.now()).toISOString()

  const jokeReport: IReport = {
    joke: joke,
    date: today,
    points: 1,
    id,
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
  const found: IReport = reportedJokes.find(
    (evaluatedJoke) => evaluatedJoke.joke === joke.joke
  ) as IReport

  const flag: number = reportedJokes.indexOf(found)

  if (!found) {
    reportedJokes = [...reportedJokes, joke]
    printRatedJokes(reportedJokes)
  } else {
    let edited = { ...found, points: joke.points }

    let restJokes = reportedJokes.slice(flag + 1, reportedJokes.length)
    restJokes = [edited, ...restJokes]
    reportedJokes = [...reportedJokes.slice(0, flag), ...restJokes]
    printRatedJokes(reportedJokes)
  }

  console.log(reportedJokes)
}

function getCurrentWeather(callback: Function): void {
  navigator.geolocation.getCurrentPosition((position): GeolocationPosition => {
    return callback(
      fetchCurrentWeather([position.coords.latitude, position.coords.longitude])
    )
  })
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

  //seria bueno hcer un cacheo de la informcion principal y la date actualizarrla dinamicamente sin tener que pedirla a la API

  //falta formatearla bien

  const iconCode: string = `http://openweathermap.org/img/w/${icon}.png`

  climaDiv?.setAttribute(
    'style',
    `background-image:url(${iconCode}); background-size: 20%; background-repeat:no-repeat;background-position: right center`
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

//reduce filter y sort

function printRatedJokes(reportedJokes: IReport[]): void {
  const reducer = (obj: Array<Object>, val: IReport): Array<Object> => {
    console.log(obj)
    if (obj[val.id] == null) {
      obj[val.id] = { ...val }
    } else {
      obj[val.id] = { ...val, ...val.points }
    }
    return obj
  }

  const html: Array<Object> = reportedJokes
    .map((reportedJoke) => reportedJoke)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1))
    .reduce(reducer, [])

  console.log(html)

  for (const id of html) {
    console.log(html[id], 'xdd')
  }
}

//const html = `<div data-id="${reportedJoke.id}">${reportedJoke.joke} ${reportedJoke.points}</div>`

getCurrentWeather((latLong: Promise<IClimate>) => latLong)
