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
const pointsButtonContainer = document.querySelector('.pointsButtons');
const title = document.querySelector('.titlejoke');
button === null || button === void 0 ? void 0 : button.addEventListener('click', printRandomJoke);
let reportedJokes = [];
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
        const jokeReport = {
            joke: joke,
            date: Date.now(),
            points: 1,
        };
        let setPoint = ['1', '2', '3'];
        const allButtons = document.querySelectorAll('button[data-type="points"]');
        allButtons.forEach((button) => pointsButtonContainer === null || pointsButtonContainer === void 0 ? void 0 : pointsButtonContainer.removeChild(button));
        setPoint.forEach((point) => {
            let pointsButton = document.createElement('button');
            pointsButton.textContent = point;
            pointsButton.setAttribute('value', point);
            pointsButton.setAttribute('data-type', 'points');
            pointsButton.addEventListener('click', (e) => setPoints(e, jokeReport));
            pointsButtonContainer === null || pointsButtonContainer === void 0 ? void 0 : pointsButtonContainer.appendChild(pointsButton);
        });
        const checkIfJoke = containerJoke === null || containerJoke === void 0 ? void 0 : containerJoke.children[2];
        const jokeInDOM = document.createElement('p');
        const textJoke = document.createTextNode(`${id}     ${joke}`);
        jokeInDOM.appendChild(textJoke);
        if ((checkIfJoke === null || checkIfJoke === void 0 ? void 0 : checkIfJoke.tagName) === 'BUTTON') {
            if (button)
                button.textContent = 'next';
            if (title)
                title.textContent = 'Haha';
            button === null || button === void 0 ? void 0 : button.insertAdjacentElement('beforebegin', jokeInDOM);
        }
        else {
            if (checkIfJoke)
                containerJoke === null || containerJoke === void 0 ? void 0 : containerJoke.replaceChild(jokeInDOM, checkIfJoke);
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
        console.log(2);
    }
    else {
        let edited = Object.assign(Object.assign({}, found), { points: joke.points });
        let restJokes = reportedJokes.slice(flag + 1, reportedJokes.length);
        restJokes = [edited, ...restJokes];
        reportedJokes = [...reportedJokes.slice(0, flag), ...restJokes];
    }
    console.log(reportedJokes);
}
