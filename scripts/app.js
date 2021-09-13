var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var todayDate = new Date(Date.now()).toLocaleString();
var button = document.querySelector('.getJoke');
var containerJoke = document.querySelector('.containerjoke');
var title = document.querySelector('.titlejoke');
var ratedContainer = document.querySelector('.rated-jokes');
var jokeContainer = document.querySelector('.joke');
var climaDiv = document.querySelector('.clima');
var select = document.querySelectorAll('.dropdown-item');
var dropdown = document.querySelector('.dropdown');
var selectValue = document.querySelector('.dropdown-content');
var selectType = document.querySelector('.selectType');
var blobs = [
    "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'> <path fill='#3F8ED0' d='M34.6,-64.9C40.4,-56.6,37.6,-38.4,38.5,-25.9C39.4,-13.4,43.9,-6.7,50.5,3.8C57.1,14.3,65.7,28.6,64.5,40.5C63.3,52.4,52.2,61.9,39.9,62.6C27.5,63.3,13.7,55.3,3.8,48.8C-6.2,42.3,-12.4,37.2,-15.2,31C-18.1,24.8,-17.6,17.3,-14.9,11.9C-12.2,6.6,-7.3,3.3,-5.4,1.1C-3.6,-1.2,-4.8,-2.3,-6.2,-5.4C-7.6,-8.5,-9.2,-13.6,-8.2,-24.7C-7.2,-35.8,-3.6,-53,5.4,-62.3C14.4,-71.7,28.8,-73.2,34.6,-64.9Z' transform='translate(100 100)' /></svg>",
    "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M36.3,-64.4C47.9,-56.1,58.8,-48.2,56.8,-37.5C54.8,-26.8,39.9,-13.4,40.1,0.1C40.2,13.6,55.4,27.2,55.5,34.6C55.6,42,40.6,43.2,28.8,40.4C17.1,37.6,8.5,30.9,2,27.4C-4.5,24,-9.1,23.8,-11.7,21.3C-14.2,18.7,-14.9,13.8,-18.4,9.9C-22,6,-28.6,3,-35.9,-4.2C-43.2,-11.4,-51.3,-22.8,-52.8,-35.6C-54.3,-48.5,-49.4,-62.7,-39.5,-71.9C-29.6,-81.2,-14.8,-85.4,-1.2,-83.3C12.3,-81.2,24.7,-72.6,36.3,-64.4Z' transform='translate(100 100)' /></svg>",
    "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'> <path fill='#3F8ED0' d='M30,-52.5C42.9,-44.5,60.2,-44.6,70,-37.2C79.8,-29.8,82.1,-14.9,78.8,-1.9C75.5,11.1,66.5,22.2,58.5,32.6C50.4,42.9,43.2,52.6,33.6,54.8C24,57,12,51.6,1.7,48.7C-8.7,45.9,-17.3,45.4,-31.7,46C-46,46.6,-66,48.1,-76.3,40.6C-86.5,33.1,-87,16.6,-84.3,1.5C-81.6,-13.5,-75.9,-27,-68,-38.7C-60.2,-50.3,-50.3,-60.2,-38.6,-68.9C-27,-77.6,-13.5,-85.1,-2.5,-80.8C8.5,-76.6,17.1,-60.5,30,-52.5Z' transform='translate(100 100)' /></svg>",
    "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M38.5,-74.5C44.6,-63.2,40.6,-42.2,41.8,-28.1C42.9,-14.1,49.3,-7,53.9,2.7C58.5,12.4,61.5,24.8,59.4,37.3C57.4,49.9,50.4,62.6,39.7,71.1C29,79.7,14.5,84.1,0.3,83.5C-13.8,82.9,-27.6,77.3,-33.7,66.1C-39.8,54.9,-38.3,38,-40.1,26.1C-42,14.1,-47.3,7.1,-54.5,-4.2C-61.8,-15.4,-70.9,-30.8,-66,-37.5C-61.1,-44.3,-42.3,-42.4,-28.9,-49.6C-15.6,-56.7,-7.8,-72.8,4.2,-80.1C16.2,-87.4,32.4,-85.9,38.5,-74.5Z' transform='translate(100 100)' /></svg>",
    "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M36.2,-63.9C47.4,-56.1,57.4,-47.5,60.6,-36.8C63.8,-26,60.1,-13,56.8,-1.9C53.6,9.2,50.8,18.5,49,31.6C47.2,44.8,46.4,61.9,38.4,73.2C30.4,84.6,15.2,90.2,3.4,84.4C-8.4,78.5,-16.8,61.1,-29.4,52.4C-41.9,43.6,-58.6,43.5,-65.9,36.2C-73.3,28.9,-71.4,14.5,-70.3,0.6C-69.2,-13.2,-69,-26.4,-64.3,-38.4C-59.6,-50.4,-50.6,-61.1,-39.1,-68.8C-27.7,-76.5,-13.8,-81.1,-0.7,-79.9C12.5,-78.7,24.9,-71.7,36.2,-63.9Z' transform='translate(100 100)' /></svg>",
    "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M31.5,-58.7C41.3,-48.9,50,-41.4,56,-32C62.1,-22.6,65.4,-11.3,67.1,1C68.8,13.3,68.9,26.6,62.8,35.7C56.6,44.9,44.2,50,32.7,56.9C21.2,63.7,10.6,72.4,-2.3,76.4C-15.2,80.5,-30.5,79.9,-43.5,73.8C-56.5,67.8,-67.2,56.4,-71.6,43.2C-76.1,30,-74.2,15,-72.9,0.8C-71.5,-13.4,-70.7,-26.9,-66.7,-40.9C-62.8,-54.9,-55.6,-69.5,-44,-78.2C-32.3,-86.9,-16.2,-89.9,-2.7,-85.3C10.9,-80.7,21.7,-68.6,31.5,-58.7Z' transform='translate(100 100)' /> </svg>",
    "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M38,-67.4C49.6,-59.2,59.6,-49.7,65.5,-38.2C71.4,-26.8,73.2,-13.4,72.5,-0.4C71.8,12.6,68.6,25.2,63.3,37.6C57.9,50,50.4,62.2,39.6,70.1C28.7,78,14.3,81.5,-0.5,82.3C-15.3,83.1,-30.5,81.2,-43.7,74.7C-56.9,68.1,-68,56.9,-74.7,43.7C-81.3,30.5,-83.4,15.2,-82.6,0.5C-81.8,-14.3,-78.1,-28.6,-71.6,-42.1C-65.1,-55.6,-55.9,-68.2,-43.5,-76.1C-31.1,-83.9,-15.6,-86.9,-1.2,-84.9C13.2,-82.8,26.4,-75.7,38,-67.4Z' transform='translate(100 100)' /></svg>",
    "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='#3F8ED0' d='M45.5,-78.6C58.7,-71.2,68.8,-58.4,75.8,-44.4C82.8,-30.4,86.7,-15.2,86.5,-0.2C86.2,14.9,81.8,29.8,74.5,43.3C67.2,56.9,57.1,69.1,44.2,76.5C31.3,83.8,15.7,86.2,0.3,85.7C-15.1,85.3,-30.2,81.8,-43.6,74.8C-57,67.8,-68.8,57.2,-77.8,44.1C-86.8,31,-93.1,15.5,-93.6,-0.3C-94.1,-16.1,-88.8,-32.2,-79.8,-45.2C-70.8,-58.2,-57.9,-68.1,-44,-75C-30,-81.9,-15,-85.8,0.6,-86.8C16.2,-87.8,32.3,-85.9,45.5,-78.6Z' transform='translate(100 100)' /></svg>",
];
dropdown === null || dropdown === void 0 ? void 0 : dropdown.addEventListener('click', function () {
    dropdown.classList.toggle('is-active');
});
document.addEventListener('click', function (e) {
    console.log(e);
    if (!e.target.classList.contains('selectType')) {
        dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.remove('is-active');
    }
});
select.forEach(function (element) {
    element.addEventListener('click', function () {
        element.parentElement.dataset.value = element.dataset.value;
        if ((selectValue === null || selectValue === void 0 ? void 0 : selectValue.dataset.value) === 'true') {
            select[1].classList.remove('is-active');
            select[0].classList.add('is-active');
            selectType.textContent = select[0].textContent;
        }
        if ((selectValue === null || selectValue === void 0 ? void 0 : selectValue.dataset.value) === 'false') {
            select[0].classList.remove('is-active');
            select[1].classList.add('is-active');
            selectType.textContent = select[1].textContent;
        }
    });
});
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    var flag = (selectValue === null || selectValue === void 0 ? void 0 : selectValue.dataset.value) === 'false' ? false : true;
    printGifs();
    printRandomJoke(flag);
});
var reportedJokes = [];
function fetchRandomJoke() {
    var URL = 'https://icanhazdadjoke.com';
    var options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };
    var jokes = fetch(URL, options)
        .then(function (res) { return res.json(); })
        .then(function (data) { return data; });
    return jokes;
}
function jokeFetchAnotherAPI() {
    var URL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
    var jokes = fetch(URL)
        .then(function (res) { return res.json(); })
        .then(function (data) { return (data = __assign(__assign({}, data), { id: data.id + 'q' })); });
    return jokes;
}
function printRandomJoke(selector) {
    if (selector === void 0) { selector = true; }
    return __awaiter(this, void 0, void 0, function () {
        var jokeObj, _a, id, joke, today, jokeReport, setPoint, buttonContainer, buttonContainerDOM, classesForButtonContainer, classesToAdd, checkIfJoke, jokeInDOM, textJoke, blobsParsed, trueBlob, blobToAdd, checkIfBlob;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(selector === true)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetchRandomJoke()];
                case 1:
                    _a = _c.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, jokeFetchAnotherAPI()];
                case 3:
                    _a = _c.sent();
                    _c.label = 4;
                case 4:
                    jokeObj = _a;
                    id = jokeObj.id, joke = jokeObj.joke;
                    today = new Date(Date.now()).toISOString();
                    jokeReport = {
                        joke: joke,
                        date: today,
                        points: '😓',
                        id: id.toString(),
                    };
                    setPoint = ['😓', '😐', '🤣'];
                    buttonContainer = document.createElement('div');
                    buttonContainerDOM = document.querySelector('.button-container');
                    classesForButtonContainer = [
                        'button-container',
                        'is-flex',
                        'is-justify-content-center',
                        'is-align-items-center',
                        'mt-3',
                        'mb-3',
                    ];
                    buttonContainer === null || buttonContainer === void 0 ? void 0 : (_b = buttonContainer.classList).add.apply(_b, classesForButtonContainer);
                    classesToAdd = ['button', 'is-info', 'mr-2', 'mt-4'];
                    if (buttonContainerDOM)
                        containerJoke === null || containerJoke === void 0 ? void 0 : containerJoke.replaceChild(buttonContainer, buttonContainerDOM);
                    setPoint.map(function (point) {
                        var _a;
                        var pointsButton = document.createElement('button');
                        pointsButton.textContent = point;
                        pointsButton.setAttribute('value', point);
                        (_a = pointsButton.classList).add.apply(_a, classesToAdd);
                        pointsButton.addEventListener('click', function (e) { return setPoints(e, jokeReport); });
                        buttonContainer.appendChild(pointsButton);
                        jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.insertAdjacentElement('afterend', buttonContainer);
                    });
                    checkIfJoke = jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.firstChild;
                    jokeInDOM = document.createElement('p');
                    textJoke = document.createTextNode(joke);
                    jokeInDOM.appendChild(textJoke);
                    blobsParsed = new DOMParser().parseFromString(blobs[Math.floor(Math.random() * blobs.length)], 'text/html');
                    trueBlob = blobsParsed.documentElement.querySelector('svg');
                    blobToAdd = blobs[Math.floor(Math.random() * blobs.length)];
                    checkIfBlob = jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.children[1];
                    console.log(checkIfBlob);
                    if (!(jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.firstChild)) {
                        if (button)
                            button.textContent = 'next';
                        if (title)
                            title.textContent = 'Haha';
                        jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.appendChild(jokeInDOM);
                        jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.insertAdjacentHTML('beforeend', blobToAdd);
                    }
                    else {
                        if (checkIfJoke)
                            jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.replaceChild(jokeInDOM, checkIfJoke);
                        if (checkIfBlob)
                            checkIfBlob === null || checkIfBlob === void 0 ? void 0 : checkIfBlob.replaceWith(trueBlob);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function setPoints(e, jokeReported) {
    var realReport = __assign(__assign({}, jokeReported), { points: e.target.value });
    generateReport(realReport);
}
function generateReport(joke) {
    var found = reportedJokes.find(function (evaluatedJoke) { return evaluatedJoke.joke === joke.joke; });
    var flag = reportedJokes.indexOf(found);
    if (!found) {
        reportedJokes = __spreadArray(__spreadArray([], reportedJokes), [joke]);
        printRatedJokes(reportedJokes);
    }
    else {
        var edited = __assign(__assign({}, found), { points: joke.points });
        var restJokes = reportedJokes.slice(flag + 1, reportedJokes.length);
        restJokes = __spreadArray([edited], restJokes);
        reportedJokes = __spreadArray(__spreadArray([], reportedJokes.slice(0, flag)), restJokes);
        printRatedJokes(reportedJokes);
    }
}
function getCurrentWeather(callback) {
    var loader = '<div class="lds-facebook"><div></div><div></div><div></div></div>';
    climaDiv === null || climaDiv === void 0 ? void 0 : climaDiv.insertAdjacentHTML('beforeend', loader);
    navigator.geolocation.getCurrentPosition(function (position) {
        return callback(fetchCurrentWeather([position.coords.latitude, position.coords.longitude]));
    });
}
function fetchCurrentWeather(latLong) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, lat, long, currentWeather;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = latLong, lat = _a[0], long = _a[1];
                    return [4 /*yield*/, fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=fedca1624d38dda6a9594d7e3a842cc0&units=metric")
                            .then(function (res) { return res.json(); })
                            .then(function (data) { return data; })];
                case 1:
                    currentWeather = _b.sent();
                    processCurrentWeather(currentWeather);
                    return [2 /*return*/];
            }
        });
    });
}
function processCurrentWeather(currentWeather) {
    return __awaiter(this, void 0, void 0, function () {
        var clima, main, name, weather, dt, feels_like, temp, temp_max, temp_min, _a, id, current, description, icon, formated;
        return __generator(this, function (_b) {
            clima = currentWeather;
            main = clima.main, name = clima.name, weather = clima.weather, dt = clima.dt;
            feels_like = main.feels_like, temp = main.temp, temp_max = main.temp_max, temp_min = main.temp_min;
            _a = weather[0], id = _a.id, current = _a.main, description = _a.description, icon = _a.icon;
            formated = {
                name: name,
                feels_like: feels_like,
                temp: temp,
                temp_max: temp_max,
                temp_min: temp_min,
                id: id,
                main: current,
                description: description,
                icon: icon,
                dt: dt,
            };
            printCurrentWeather(formated);
            return [2 /*return*/];
        });
    });
}
function printCurrentWeather(_a) {
    //seria bueno hcer un cacheo de la informcion principal y la date actualizarrla dinamicamente sin tener que pedirla a la API
    var name = _a.name, feels_like = _a.feels_like, temp = _a.temp, temp_max = _a.temp_max, temp_min = _a.temp_min, main = _a.main, icon = _a.icon;
    var loader = document.querySelector('.lds-facebook');
    var iconCode = "http://openweathermap.org/img/w/" + icon + ".png";
    climaDiv === null || climaDiv === void 0 ? void 0 : climaDiv.setAttribute('style', "background-image:url(" + iconCode + "); background-size: 20%; background-repeat:no-repeat;background-position: right center");
    var html = "\n      <h2 class=\"is-size-3\"> \n          " + name + "\n      </h2>\n    \n      <small>\n           " + todayDate + "\n      </small>\n\n      <h4>\n          " + main + "\n      </h4>\n\n      <p class=\"is-size-4\">\n          " + temp + "\u00B0\n      </p>\n\n      <p class=\"is-size-7\">\n          Feels like: " + feels_like + "\u00B0\n      </p>\n\n      <p class=\"is-size-6\">\n          " + temp_min + "\u00B0 / " + temp_max + "\u00B0\n      </p>\n  ";
    climaDiv === null || climaDiv === void 0 ? void 0 : climaDiv.removeChild(loader);
    climaDiv === null || climaDiv === void 0 ? void 0 : climaDiv.insertAdjacentHTML('beforeend', html); //actualizar reloj.
}
function printRatedJokes(reportedJokes) {
    return __awaiter(this, void 0, void 0, function () {
        var reducer, html, _a, slug, image_original_url, _loop_1, identifier, modalTrigger;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reducer = function (obj, val) {
                        if (obj[val.id.toString()] == null) {
                            obj[val.id.toString()] = __assign({}, val);
                        }
                        else {
                            obj[val.id.toString()] = __assign({ val: val }, val.points);
                        }
                        return obj;
                    };
                    html = reportedJokes
                        .map(function (reportedJoke) { return reportedJoke; })
                        .sort(function (a, b) { return (new Date(a.date) > new Date(b.date) ? -1 : 1); })
                        .reduce(reducer, []);
                    return [4 /*yield*/, fetchGifs()];
                case 1:
                    _a = _b.sent(), slug = _a.slug, image_original_url = _a.image_original_url;
                    _loop_1 = function (identifier) {
                        if (Object.prototype.hasOwnProperty.call(html, identifier)) {
                            var _c = html[identifier], id_1 = _c.id, joke = _c.joke, points = _c.points;
                            //aqui es dnde tal
                            var htmlInDOM = "\n      <div class=\"panel-block is-active isThere\" data-id=\"" + id_1 + "\">\n        <div class=\"dropdown is-hoverable\">\n        <div class=\"dropdown-trigger\">\n          <button\n            class=\"button modalInfo\"\n            aria-haspopup=\"true\"\n            aria-controls=\"dropdown-menu4\"\n          >\n            <span>" + id_1 + "</span>\n            <span class=\"icon is-small\">\n              <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i> \n            </span>\n          </button>\n        </div>\n        <div class=\"dropdown-menu\" id=\"dropdown-menu4\" role=\"menu\">\n          <div class=\"dropdown-content\">\n            <div class=\"dropdown-item\">\n              <p>\n            " + joke + "\n              </p>\n              <span>Score " + points + "</span>\n\n              <img src=" + image_original_url + " alt=" + slug + "/>\n\n              \n            </div>\n          </div>\n        </div>\n        </div>\n        </div>\n        ";
                            var parsedHTML = new DOMParser().parseFromString(htmlInDOM, 'text/html');
                            var savedJokes = document.querySelectorAll('.isThere');
                            var jokeToAdd = parsedHTML.documentElement.querySelector('.isThere');
                            ratedContainer === null || ratedContainer === void 0 ? void 0 : ratedContainer.appendChild(jokeToAdd);
                            if (savedJokes) {
                                Array.from(savedJokes)
                                    .filter(function (jok) { return jok.dataset.id === id_1.toString(); })
                                    .map(function (jokeFiltered) {
                                    var coincidence = document.querySelector("[data-id=\"" + jokeFiltered.dataset.id + "\"]");
                                    if (coincidence) {
                                        var definitiva = coincidence === null || coincidence === void 0 ? void 0 : coincidence.children[0].parentNode;
                                        ratedContainer === null || ratedContainer === void 0 ? void 0 : ratedContainer.removeChild(definitiva);
                                    }
                                });
                            }
                        }
                    };
                    for (identifier in html) {
                        _loop_1(identifier);
                    }
                    modalTrigger = document.querySelectorAll('.modalInfo');
                    modalTrigger.forEach(function (button) {
                        button.addEventListener('click', function (e) {
                            var target = e.target;
                            var modalContent = target.parentNode.parentNode.parentNode.children[1].textContent;
                            if (modalContent)
                                createModal(modalContent);
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function createModal(modalContent) {
    return __awaiter(this, void 0, void 0, function () {
        var formatedContent, points, content, _a, slug, image_original_url, html, body, modalClose, modalBackground;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    formatedContent = modalContent
                        .trim()
                        .split(' ')
                        .filter(function (content) { return content; });
                    points = formatedContent.slice(-1)[0];
                    content = formatedContent.slice(0, -2).join(' ');
                    return [4 /*yield*/, fetchGifs()];
                case 1:
                    _a = _b.sent(), slug = _a.slug, image_original_url = _a.image_original_url;
                    html = "<div class=\"modal is-active\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-content p-2 is-flex is-flex-direction-column\">\n  <button class=\"modal-close is-large m-3 modality\" aria-label=\"close\"></button>\n\n " + content + "  \n <img src=" + image_original_url + " alt=" + slug + "/>\n <h2 class=\"points\">\u2B50\uFE0F " + points + "</h2>\n  </div>\n</div>";
                    body = document.querySelector('body');
                    body === null || body === void 0 ? void 0 : body.insertAdjacentHTML('beforeend', html);
                    modalClose = body === null || body === void 0 ? void 0 : body.querySelector('.modal-close');
                    modalBackground = body === null || body === void 0 ? void 0 : body.querySelector('.modal-background');
                    modalBackground === null || modalBackground === void 0 ? void 0 : modalBackground.addEventListener('click', function () {
                        var _a, _b;
                        (_b = (_a = modalClose === null || modalClose === void 0 ? void 0 : modalClose.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
                    });
                    modalClose === null || modalClose === void 0 ? void 0 : modalClose.addEventListener('click', function () {
                        var _a, _b;
                        (_b = (_a = modalClose.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function fetchGifs() {
    var URL = 'https://api.giphy.com/v1/gifs/random?api_key=S2Z53q8aVQTgnvnR06bU81vfVTIigfQa&tag=funny&rating=g';
    var gifs = fetch(URL)
        .then(function (res) { return res.json(); })
        .then(function (data) { return data.data; });
    return gifs;
}
function printGifs() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, slug, image_original_url, html, gifsCreated, gifs;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetchGifs()];
                case 1:
                    _a = _b.sent(), slug = _a.slug, image_original_url = _a.image_original_url;
                    html = "<img class=\"gif\" src=" + image_original_url + " alt=" + slug + "/>";
                    gifsCreated = document.querySelector('.gif');
                    gifs = document.querySelector('.gifs');
                    if (gifsCreated) {
                        gifs === null || gifs === void 0 ? void 0 : gifs.removeChild(gifsCreated);
                    }
                    gifs === null || gifs === void 0 ? void 0 : gifs.insertAdjacentHTML('beforeend', html);
                    return [2 /*return*/];
            }
        });
    });
}
getCurrentWeather(function (latLong) { return latLong; });
export {};
