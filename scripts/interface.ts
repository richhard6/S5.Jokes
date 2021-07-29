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

export {
  IJoke,
  IReport,
  IClimate,
  IMain,
  IWeather,
  IFormated,
  ILatLong,
  MaybeILatLong,
}
