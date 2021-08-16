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
dropdown === null || dropdown === void 0 ? void 0 : dropdown.addEventListener('click', function () {
    dropdown.classList.toggle('is-active');
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
        var jokeObj, _a, id, joke, today, jokeReport, setPoint, buttonContainer, buttonContainerDOM, classesForButtonContainer, classesToAdd, checkIfJoke, jokeInDOM, textJoke;
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
                        points: 1,
                        id: id.toString(),
                    };
                    setPoint = ['1', '2', '3'];
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
                    return [2 /*return*/];
            }
        });
    });
}
function setPoints(e, jokeReported) {
    var realReport = __assign(__assign({}, jokeReported), { points: parseInt(e.target.value) });
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
    var reducer = function (obj, val) {
        console.log(obj);
        if (obj[val.id.toString()] == null) {
            obj[val.id.toString()] = __assign({}, val);
        }
        else {
            obj[val.id.toString()] = __assign({ val: val }, val.points);
        }
        return obj;
    };
    var html = reportedJokes
        .map(function (reportedJoke) { return reportedJoke; })
        .sort(function (a, b) { return (new Date(a.date) > new Date(b.date) ? -1 : 1); })
        .reduce(reducer, []);
    var _loop_1 = function (identifier) {
        if (Object.prototype.hasOwnProperty.call(html, identifier)) {
            var _a = html[identifier], id_1 = _a.id, joke = _a.joke, points = _a.points;
            var htmlInDOM = "\n      <div class=\"panel-block is-active isThere\" data-id=\"" + id_1 + "\">\n        <div class=\"dropdown is-hoverable\">\n        <div class=\"dropdown-trigger\">\n          <button\n            class=\"button modalInfo\"\n            aria-haspopup=\"true\"\n            aria-controls=\"dropdown-menu4\"\n          >\n            <span>" + id_1 + "</span>\n            <span class=\"icon is-small\">\n              <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i> \n            </span>\n          </button>\n        </div>\n        <div class=\"dropdown-menu\" id=\"dropdown-menu4\" role=\"menu\">\n          <div class=\"dropdown-content\">\n            <div class=\"dropdown-item\">\n              <p>\n            " + joke + "\n              </p>\n              <span>\u2B50\uFE0F " + points + "</span>\n            </div>\n          </div>\n        </div>\n        </div>\n        </div>\n        ";
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
    for (var identifier in html) {
        _loop_1(identifier);
    }
    var modalTrigger = document.querySelectorAll('.modalInfo');
    modalTrigger.forEach(function (button) {
        button.addEventListener('click', function (e) {
            var target = e.target;
            var modalContent = target.parentNode.parentNode.parentNode.children[1].textContent;
            if (modalContent)
                createModal(modalContent);
        });
    });
}
function createModal(modalContent) {
    var formatedContent = modalContent
        .trim()
        .split(' ')
        .filter(function (content) { return content; });
    var points = formatedContent.slice(-1)[0];
    var content = formatedContent.slice(0, -2).join(' ');
    var html = "<div class=\"modal is-active\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-content p-2\">\n  <button class=\"modal-close is-large m-3 modality\" aria-label=\"close\"></button>\n\n " + content + "  \u2B50\uFE0F " + points + "\n  </div>\n</div>";
    var body = document.querySelector('body');
    body === null || body === void 0 ? void 0 : body.insertAdjacentHTML('beforeend', html);
    var modalClose = body === null || body === void 0 ? void 0 : body.querySelector('.modal-close');
    var modalBackground = body === null || body === void 0 ? void 0 : body.querySelector('.modal-background');
    modalBackground === null || modalBackground === void 0 ? void 0 : modalBackground.addEventListener('click', function () {
        var _a, _b;
        (_b = (_a = modalClose === null || modalClose === void 0 ? void 0 : modalClose.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    });
    modalClose === null || modalClose === void 0 ? void 0 : modalClose.addEventListener('click', function () {
        var _a, _b;
        (_b = (_a = modalClose.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
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
