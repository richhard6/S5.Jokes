"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const button = document.querySelector('.getJoke');
const containerJoke = document.querySelector('.containerjoke');
const title = document.querySelector('.titlejoke');
button === null || button === void 0 ? void 0 : button.addEventListener('click', printRandomJoke);
let reportedJokes = [];
function getCurrentLatLong(callback) {
    const latitude = navigator.geolocation.getCurrentPosition((position) => {
        return callback(fetchCurrentWeather([
            position.coords.latitude,
            position.coords.longitude,
        ]));
    });
    console.log(latitude);
    return latitude;
}
function fetchCurrentWeather(latLong) {
    return __awaiter(this, void 0, void 0, function* () {
        const [lat, long] = latLong;
        console.log(lat, long);
        //fedca1624d38dda6a9594d7e3a842cc0
        //?lat={lat}&lon={lon}
        const currentWeather = yield fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fedca1624d38dda6a9594d7e3a842cc0&units=metric`)
            .then((res) => res.json())
            .then((data) => data);
        processCurrentWeather(currentWeather);
    });
}
function fetchRandomJoke() {
    const URL = 'https://icanhazdadjoke.com';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };
    const jokes = fetch(URL, options)
        .then((res) => res.json())
        .then((data) => data);
    return jokes;
}
function printRandomJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jokeObj = yield fetchRandomJoke();
        const { id, joke } = jokeObj;
        let today = new Date(Date.now()).toISOString();
        const jokeReport = {
            joke: joke,
            date: today,
            points: 1,
        };
        let setPoint = ['1', '2', '3'];
        const buttonContainer = document.createElement('div');
        const buttonContainerDOM = document.querySelector('.button-container');
        const classesForButtonContainer = [
            'button-container',
            'is-flex',
            'is-justify-content-center',
            'is-align-items-center',
            'mt-3',
            'mb-3',
        ];
        buttonContainer === null || buttonContainer === void 0 ? void 0 : buttonContainer.classList.add(...classesForButtonContainer);
        const classesToAdd = ['button', 'is-info', 'mb-2', 'mr-2'];
        const jokeContainer = document.querySelector('.joke');
        if (buttonContainerDOM)
            containerJoke === null || containerJoke === void 0 ? void 0 : containerJoke.replaceChild(buttonContainer, buttonContainerDOM);
        setPoint.map((point) => {
            let pointsButton = document.createElement('button');
            pointsButton.textContent = point;
            pointsButton.setAttribute('value', point);
            pointsButton.classList.add(...classesToAdd);
            pointsButton.addEventListener('click', (e) => setPoints(e, jokeReport));
            buttonContainer.appendChild(pointsButton);
            jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.insertAdjacentElement('afterend', buttonContainer);
        });
        const checkIfJoke = jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.firstChild;
        const jokeInDOM = document.createElement('p');
        const textJoke = document.createTextNode(joke);
        jokeInDOM.appendChild(textJoke);
        if (!(jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.firstChild)) {
            if (button)
                button.textContent = 'next';
            if (title)
                title.textContent = 'Haha'; //maybe a gif here
            jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.appendChild(jokeInDOM);
        }
        else {
            if (checkIfJoke)
                jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.replaceChild(jokeInDOM, checkIfJoke);
        }
    });
}
function setPoints(e, jokeReported) {
    let realReport = Object.assign(Object.assign({}, jokeReported), { points: parseInt(e.target.value) });
    generateReport(realReport);
}
function generateReport(joke) {
    const found = reportedJokes.find((evaluatedJoke) => evaluatedJoke.joke === joke.joke);
    const flag = reportedJokes.indexOf(found);
    if (!found) {
        reportedJokes = [...reportedJokes, joke];
    }
    else {
        let edited = Object.assign(Object.assign({}, found), { points: joke.points });
        let restJokes = reportedJokes.slice(flag + 1, reportedJokes.length);
        restJokes = [edited, ...restJokes];
        reportedJokes = [...reportedJokes.slice(0, flag), ...restJokes];
    }
    console.log(reportedJokes);
}
function processCurrentWeather(currentWeather) {
    return __awaiter(this, void 0, void 0, function* () {
        const clima = currentWeather;
        const { main, name, weather, dt } = clima;
        const { feels_like, temp, temp_max, temp_min } = main;
        const { id, main: current, description, icon } = weather[0];
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
        };
        printCurrentWeather(formated);
    });
}
function printCurrentWeather({ name, feels_like, temp, temp_max, temp_min, id, main, description, icon, dt, }) {
    //a dt le faltan 3 numeros y no da la fecha bien...
    const climaDiv = document.querySelector('.clima');
    const todayDate = new Date(Date.now()); //falta formatearla bien
    //const separatedDate: Array<string> = todayDate.splice
    const iconCode = `http://openweathermap.org/img/w/${icon}.png`;
    climaDiv === null || climaDiv === void 0 ? void 0 : climaDiv.setAttribute('style', `background-image:url(${iconCode}); background-repeat:no-repeat;background-position: right center`);
    const html = `
  


  
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
  
  
  
  
  
  `;
    climaDiv === null || climaDiv === void 0 ? void 0 : climaDiv.insertAdjacentHTML('beforeend', html);
}
getCurrentLatLong((latLong) => latLong);
