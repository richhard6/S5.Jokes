import {
  IJoke,
  IReport,
  IClimate,
  IFormated,
  MaybeILatLong,
  NodeToDestroy,
  NodeToAdd,
  IGifs,
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

const blobs: string[] = [
  "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'> <path fill='#3F8ED0' d='M34.6,-64.9C40.4,-56.6,37.6,-38.4,38.5,-25.9C39.4,-13.4,43.9,-6.7,50.5,3.8C57.1,14.3,65.7,28.6,64.5,40.5C63.3,52.4,52.2,61.9,39.9,62.6C27.5,63.3,13.7,55.3,3.8,48.8C-6.2,42.3,-12.4,37.2,-15.2,31C-18.1,24.8,-17.6,17.3,-14.9,11.9C-12.2,6.6,-7.3,3.3,-5.4,1.1C-3.6,-1.2,-4.8,-2.3,-6.2,-5.4C-7.6,-8.5,-9.2,-13.6,-8.2,-24.7C-7.2,-35.8,-3.6,-53,5.4,-62.3C14.4,-71.7,28.8,-73.2,34.6,-64.9Z' transform='translate(100 100)' /></svg>",
  "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M36.3,-64.4C47.9,-56.1,58.8,-48.2,56.8,-37.5C54.8,-26.8,39.9,-13.4,40.1,0.1C40.2,13.6,55.4,27.2,55.5,34.6C55.6,42,40.6,43.2,28.8,40.4C17.1,37.6,8.5,30.9,2,27.4C-4.5,24,-9.1,23.8,-11.7,21.3C-14.2,18.7,-14.9,13.8,-18.4,9.9C-22,6,-28.6,3,-35.9,-4.2C-43.2,-11.4,-51.3,-22.8,-52.8,-35.6C-54.3,-48.5,-49.4,-62.7,-39.5,-71.9C-29.6,-81.2,-14.8,-85.4,-1.2,-83.3C12.3,-81.2,24.7,-72.6,36.3,-64.4Z' transform='translate(100 100)' /></svg>",
  "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'> <path fill='#3F8ED0' d='M30,-52.5C42.9,-44.5,60.2,-44.6,70,-37.2C79.8,-29.8,82.1,-14.9,78.8,-1.9C75.5,11.1,66.5,22.2,58.5,32.6C50.4,42.9,43.2,52.6,33.6,54.8C24,57,12,51.6,1.7,48.7C-8.7,45.9,-17.3,45.4,-31.7,46C-46,46.6,-66,48.1,-76.3,40.6C-86.5,33.1,-87,16.6,-84.3,1.5C-81.6,-13.5,-75.9,-27,-68,-38.7C-60.2,-50.3,-50.3,-60.2,-38.6,-68.9C-27,-77.6,-13.5,-85.1,-2.5,-80.8C8.5,-76.6,17.1,-60.5,30,-52.5Z' transform='translate(100 100)' /></svg>",
  "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M38.5,-74.5C44.6,-63.2,40.6,-42.2,41.8,-28.1C42.9,-14.1,49.3,-7,53.9,2.7C58.5,12.4,61.5,24.8,59.4,37.3C57.4,49.9,50.4,62.6,39.7,71.1C29,79.7,14.5,84.1,0.3,83.5C-13.8,82.9,-27.6,77.3,-33.7,66.1C-39.8,54.9,-38.3,38,-40.1,26.1C-42,14.1,-47.3,7.1,-54.5,-4.2C-61.8,-15.4,-70.9,-30.8,-66,-37.5C-61.1,-44.3,-42.3,-42.4,-28.9,-49.6C-15.6,-56.7,-7.8,-72.8,4.2,-80.1C16.2,-87.4,32.4,-85.9,38.5,-74.5Z' transform='translate(100 100)' /></svg>",
  "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M36.2,-63.9C47.4,-56.1,57.4,-47.5,60.6,-36.8C63.8,-26,60.1,-13,56.8,-1.9C53.6,9.2,50.8,18.5,49,31.6C47.2,44.8,46.4,61.9,38.4,73.2C30.4,84.6,15.2,90.2,3.4,84.4C-8.4,78.5,-16.8,61.1,-29.4,52.4C-41.9,43.6,-58.6,43.5,-65.9,36.2C-73.3,28.9,-71.4,14.5,-70.3,0.6C-69.2,-13.2,-69,-26.4,-64.3,-38.4C-59.6,-50.4,-50.6,-61.1,-39.1,-68.8C-27.7,-76.5,-13.8,-81.1,-0.7,-79.9C12.5,-78.7,24.9,-71.7,36.2,-63.9Z' transform='translate(100 100)' /></svg>",
  "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M31.5,-58.7C41.3,-48.9,50,-41.4,56,-32C62.1,-22.6,65.4,-11.3,67.1,1C68.8,13.3,68.9,26.6,62.8,35.7C56.6,44.9,44.2,50,32.7,56.9C21.2,63.7,10.6,72.4,-2.3,76.4C-15.2,80.5,-30.5,79.9,-43.5,73.8C-56.5,67.8,-67.2,56.4,-71.6,43.2C-76.1,30,-74.2,15,-72.9,0.8C-71.5,-13.4,-70.7,-26.9,-66.7,-40.9C-62.8,-54.9,-55.6,-69.5,-44,-78.2C-32.3,-86.9,-16.2,-89.9,-2.7,-85.3C10.9,-80.7,21.7,-68.6,31.5,-58.7Z' transform='translate(100 100)' /> </svg>",
  "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M38,-67.4C49.6,-59.2,59.6,-49.7,65.5,-38.2C71.4,-26.8,73.2,-13.4,72.5,-0.4C71.8,12.6,68.6,25.2,63.3,37.6C57.9,50,50.4,62.2,39.6,70.1C28.7,78,14.3,81.5,-0.5,82.3C-15.3,83.1,-30.5,81.2,-43.7,74.7C-56.9,68.1,-68,56.9,-74.7,43.7C-81.3,30.5,-83.4,15.2,-82.6,0.5C-81.8,-14.3,-78.1,-28.6,-71.6,-42.1C-65.1,-55.6,-55.9,-68.2,-43.5,-76.1C-31.1,-83.9,-15.6,-86.9,-1.2,-84.9C13.2,-82.8,26.4,-75.7,38,-67.4Z' transform='translate(100 100)' /></svg>",
  "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M45.5,-78.6C58.7,-71.2,68.8,-58.4,75.8,-44.4C82.8,-30.4,86.7,-15.2,86.5,-0.2C86.2,14.9,81.8,29.8,74.5,43.3C67.2,56.9,57.1,69.1,44.2,76.5C31.3,83.8,15.7,86.2,0.3,85.7C-15.1,85.3,-30.2,81.8,-43.6,74.8C-57,67.8,-68.8,57.2,-77.8,44.1C-86.8,31,-93.1,15.5,-93.6,-0.3C-94.1,-16.1,-88.8,-32.2,-79.8,-45.2C-70.8,-58.2,-57.9,-68.1,-44,-75C-30,-81.9,-15,-85.8,0.6,-86.8C16.2,-87.8,32.3,-85.9,45.5,-78.6Z' transform='translate(100 100)' /></svg>",
]

dropdown?.addEventListener('click', () => {
  dropdown.classList.toggle('is-active')
})

document.addEventListener('click', (e) => {
  console.log(e)
  if (!(e.target as HTMLDivElement).classList.contains('selectType')) {
    dropdown?.classList.remove('is-active')
  }
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
  printGifs()
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
    points: '😓',
    id: id.toString(),
  }

  let setPoint: string[] = ['😓', '😐', '🤣']

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

  const blobsParsed = new DOMParser().parseFromString(
    blobs[Math.floor(Math.random() * blobs.length)],
    'text/html'
  )

  const trueBlob = blobsParsed.documentElement.querySelector<Element>(
    'svg'
  ) as NodeToAdd

  const blobToAdd = blobs[Math.floor(Math.random() * blobs.length)]

  const checkIfBlob = jokeContainer?.children[1]

  console.log(checkIfBlob)

  if (!jokeContainer?.firstChild) {
    if (button) button.textContent = 'next'
    if (title) title.textContent = 'Haha'
    jokeContainer?.appendChild(jokeInDOM)
    jokeContainer?.insertAdjacentHTML('beforeend', blobToAdd)
  } else {
    if (checkIfJoke) jokeContainer?.replaceChild(jokeInDOM, checkIfJoke)
    if (checkIfBlob) checkIfBlob?.replaceWith(trueBlob)
  }
}

function setPoints(e: Event, jokeReported: IReport): void {
  let realReport: IReport = {
    ...jokeReported,
    points: (<HTMLButtonElement>e.target).value,
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
  const loader: string =
    '<div class="lds-facebook"><div></div><div></div><div></div></div>'

  climaDiv?.insertAdjacentHTML('beforeend', loader)
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

  const loader = document.querySelector<HTMLDivElement>('.lds-facebook')

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

  climaDiv?.removeChild(loader!)
  climaDiv?.insertAdjacentHTML('beforeend', html) //actualizar reloj.
}

async function printRatedJokes(reportedJokes: IReport[]): Promise<void> {
  const reducer = (obj: IReport[], val: IReport): IReport[] => {
    if (obj[val.id.toString()] == null) {
      obj[val.id.toString()] = { ...val }
    } else {
      obj[val.id.toString()] = { val, ...val.points }
    }
    return obj
  }

  const html: IReport[] = reportedJokes
    .map((reportedJoke) => reportedJoke)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
    .reduce(reducer, [])

  const { slug, image_original_url } = await fetchGifs()

  for (const identifier in html) {
    if (Object.prototype.hasOwnProperty.call(html, identifier)) {
      const { id, joke, points } = html[identifier]

      //aqui es dnde tal

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
              <span>Score ${points}</span>

              <img src=${image_original_url} alt=${slug}/>

              
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

async function createModal(modalContent: string): Promise<void> {
  const formatedContent = modalContent
    .trim()
    .split(' ')
    .filter((content) => content)
  const [points] = formatedContent.slice(-1)
  const content: string = formatedContent.slice(0, -2).join(' ')
  const { slug, image_original_url } = await fetchGifs()

  const html: string = `<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content p-2 is-flex is-flex-direction-column">
  <button class="modal-close is-large m-3 modality" aria-label="close"></button>

 ${content}  
 <img src=${image_original_url} alt=${slug}/>
 <h2 class="points">⭐️ ${points}</h2>
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

function fetchGifs(): Promise<IGifs> {
  const URL: string =
    'https://api.giphy.com/v1/gifs/random?api_key=S2Z53q8aVQTgnvnR06bU81vfVTIigfQa&tag=funny&rating=g'

  const gifs: IGifs | Promise<IGifs> = fetch(URL)
    .then((res) => res.json())
    .then((data) => data.data)
  return gifs
}

async function printGifs(): Promise<void> {
  const { slug, image_original_url } = await fetchGifs()

  const html: string = `<img class="gif" src=${image_original_url} alt=${slug}/>`

  const gifsCreated = document.querySelector<HTMLImageElement>('.gif')

  const gifs = document.querySelector<HTMLDivElement>('.gifs')

  if (gifsCreated) {
    gifs?.removeChild(gifsCreated)
  }

  gifs?.insertAdjacentHTML('beforeend', html)
}

getCurrentWeather((latLong: Promise<IClimate>) => latLong)
