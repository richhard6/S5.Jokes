import {
  IJoke,
  IReport,
  IClimate,
  IFormated,
  MaybeILatLong,
  NodeToDestroy,
  NodeToAdd,
} from './interface'

const todayDate: string = new Date(Date.now()).toLocaleString()
const button = document.querySelector<HTMLButtonElement>('.getJoke')
const containerJoke = document.querySelector<HTMLDivElement>('.containerjoke')
const title = document.querySelector<HTMLParagraphElement>('.titlejoke')
const ratedContainer = document.querySelector<HTMLDivElement>('.rated-jokes')
const jokeContainer = document.querySelector<HTMLDivElement>('.joke')
const climaDiv = document.querySelector<HTMLDivElement>('.clima')
const select = document.querySelectorAll<HTMLDivElement>('.dropdown-item')
const dropdown = document.querySelector<HTMLDivElement>('.dropdown')
const selectValue = document.querySelector<HTMLDivElement>('.dropdown-content')
const selectType = document.querySelector<HTMLSpanElement>('.selectType')

dropdown?.addEventListener('click', () => {
  dropdown.classList.toggle('is-active')
})

select.forEach((element) => {
  element.addEventListener('click', () => {
    element.parentElement!.dataset.value = element.dataset.value

    if (selectValue?.dataset.value === 'true') {
      select[1].classList.remove('is-active')
      select[0].classList.add('is-active')
      selectType!.textContent = select[0].textContent
    }

    if (selectValue?.dataset.value === 'false') {
      select[0].classList.remove('is-active')
      select[1].classList.add('is-active')
      selectType!.textContent = select[1].textContent
    }
  })
})

button?.addEventListener('click', () => {
  let flag: Boolean = selectValue?.dataset.value === 'false' ? false : true
  printRandomJoke(flag)
})

let reportedJokes: IReport[] = []

function fetchRandomJoke(): Promise<IJoke> {
  const URL: string = 'https://icanhazdadjoke.com'
  const options: Object = {
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

function jokeFetchAnotherAPI(): Promise<IJoke> {
  const URL: string =
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

  const jokes: IJoke | Promise<IJoke> = fetch(URL)
    .then((res) => res.json())
    .then((data) => (data = { ...data, id: data.id + 'q' }))

  return jokes
}

async function printRandomJoke(selector: Boolean = true): Promise<void> {
  let jokeObj: IJoke =
    selector === true ? await fetchRandomJoke() : await jokeFetchAnotherAPI()

  const { id, joke } = jokeObj

  let today = new Date(Date.now()).toISOString()

  const jokeReport: IReport = {
    joke: joke,
    date: today,
    points: 1,
    id: id.toString(),
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

  const classesToAdd: string[] = ['button', 'is-info', 'mr-2', 'mt-4']

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
  main,
  icon,
}: IFormated): void {
  //seria bueno hcer un cacheo de la informcion principal y la date actualizarrla dinamicamente sin tener que pedirla a la API

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

  climaDiv?.insertAdjacentHTML('beforeend', html) //actualizar reloj.
}

function printRatedJokes(reportedJokes: IReport[]): void {
  const reducer = (obj: IReport[], val: IReport): IReport[] => {
    console.log(obj)
    if (obj[val.id.toString()] == null) {
      obj[val.id.toString()] = { ...val }
    } else {
      obj[val.id.toString()] = { ...val, ...val.points } //revisar si doble spread es necesario
    }
    return obj
  }

  const html: IReport[] = reportedJokes
    .map((reportedJoke) => reportedJoke)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
    .reduce(reducer, [])

  for (const identifier in html) {
    if (Object.prototype.hasOwnProperty.call(html, identifier)) {
      const { id, joke, points } = html[identifier]

      const htmlInDOM: string = `
      <div class="panel-block is-active isThere" data-id="${id}">
        <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
          <button
            class="button modalInfo"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span>${id}</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i> 
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <p>
            ${joke}
              </p>
              <span>⭐️ ${points}</span>
            </div>
          </div>
        </div>
        </div>
        </div>
        `

      const parsedHTML = new DOMParser().parseFromString(htmlInDOM, 'text/html')
      const savedJokes = document.querySelectorAll<HTMLDivElement>('.isThere')
      const jokeToAdd = parsedHTML.documentElement.querySelector<Element>(
        '.isThere'
      ) as NodeToAdd

      ratedContainer?.appendChild(jokeToAdd)

      if (savedJokes) {
        Array.from(savedJokes)
          .filter((jok) => jok.dataset.id === id.toString())
          .map((jokeFiltered) => {
            const coincidence = document.querySelector<Element>(
              `[data-id="${jokeFiltered.dataset.id}"]`
            )
            if (coincidence) {
              const definitiva: NodeToDestroy = coincidence?.children[0]
                .parentNode as Node
              ratedContainer?.removeChild(definitiva)
            }
          })
      }
    }
  }

  const modalTrigger =
    document.querySelectorAll<HTMLButtonElement>('.modalInfo')

  modalTrigger.forEach((button) => {
    button.addEventListener('click', (e) => {
      const target: HTMLButtonElement = e.target as HTMLButtonElement

      const modalContent =
        target!.parentNode!.parentNode!.parentNode!.children[1].textContent

      if (modalContent) createModal(modalContent)
    })
  })
}

function createModal(modalContent: string): void {
  const formatedContent = modalContent
    .trim()
    .split(' ')
    .filter((content) => content)
  const [points] = formatedContent.slice(-1)
  const content: string = formatedContent.slice(0, -2).join(' ')

  const html: string = `<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content p-2">
  <button class="modal-close is-large m-3 modality" aria-label="close"></button>

 ${content}  ⭐️ ${points}
  </div>
</div>`

  const body = document.querySelector<HTMLBodyElement>('body')

  body?.insertAdjacentHTML('beforeend', html)

  const modalClose = body?.querySelector<HTMLDivElement>('.modal-close')

  const modalBackground =
    body?.querySelector<HTMLDivElement>('.modal-background')

  modalBackground?.addEventListener('click', (): void => {
    modalClose?.parentElement?.parentElement?.remove()
  })

  modalClose?.addEventListener('click', (): void => {
    modalClose.parentElement?.parentElement?.remove()
  })
}

getCurrentWeather((latLong: Promise<IClimate>) => latLong)
