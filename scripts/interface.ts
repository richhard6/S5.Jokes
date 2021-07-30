interface IJoke {
  id: string | Number
  joke: string
  status: number
  category?: string
}

interface IReport {
  joke: String
  date: string
  points: Number
  id: string | Number
}

type NodeToDestroy = IPrueba | Element | Node | null

type NodeToAdd = Element | Node

interface IPrueba {
  children: HTMLCollectionOf<Element>
}

interface IClimate {
  base: String
  clouds: Object
  cod: Number
  coord: Object
  dt: number
  id: Number
  main: IMain
  name: string
  sys: Object
  timezone: Number
  weather: Array<IWeather>
  wind: Object
}

interface IMain {
  feels_like: Number
  temp: Number
  temp_max: Number
  temp_min: Number
}

interface IWeather {
  id: Number
  main: String
  description: String
  icon: String
}

interface IFormated extends IWeather, IMain {
  name: String
  dt: number
}

interface ILatLong {
  0: Number
  1: Number
}

type MaybeILatLong = Array<Number> | void

interface IReportedJokes {
  string: Object
}

interface IAnotherJoke {
  category: string
  joke: string
  id: Number
}

type Joke = IReport | IAnotherReported

interface IAnotherReported {
  joke: string
  points: Number
  id: Number
  category: string
}

export {
  IJoke,
  IReport,
  IClimate,
  IMain,
  IWeather,
  IFormated,
  ILatLong,
  MaybeILatLong,
  IReportedJokes,
  IPrueba,
  NodeToDestroy,
  NodeToAdd,
  IAnotherJoke,
  IAnotherReported,
  Joke,
}
