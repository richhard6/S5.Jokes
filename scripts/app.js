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
var button = document.querySelector('.getJoke');
var containerJoke = document.querySelector('.containerjoke');
var pointsButtonContainer = document.querySelector('.pointsButtons');
var title = document.querySelector('.titlejoke');
button === null || button === void 0 ? void 0 : button.addEventListener('click', printRandomJoke);
var reportedJokes = [];
function fetchRandomJoke() {
    var URL = 'https://icanhazdadjoke.com';
    var options = {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    };
    var jokes = fetch(URL, options)
        .then(function (res) { return res.json(); })
        .then(function (data) { return data; });
    return jokes;
}
var points = 1;
function printRandomJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var jokeObj, id, joke, jokeReport, setPoint, checkIfJoke, jokeInDOM, textJoke;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchRandomJoke()];
                case 1:
                    jokeObj = _a.sent();
                    id = jokeObj.id, joke = jokeObj.joke;
                    jokeReport = {
                        joke: joke,
                        date: Date.now(),
                        points: points
                    };
                    setPoint = ['1', '2', '3'];
                    if (!(pointsButtonContainer === null || pointsButtonContainer === void 0 ? void 0 : pointsButtonContainer.children.length)) {
                        setPoint.forEach(function (point) {
                            var pointsButton = document.createElement('button');
                            pointsButton.textContent = point;
                            pointsButton.setAttribute('value', point);
                            pointsButton.addEventListener('click', function (e) { return setPoints(e, jokeReport); });
                            pointsButtonContainer === null || pointsButtonContainer === void 0 ? void 0 : pointsButtonContainer.appendChild(pointsButton);
                        });
                    }
                    checkIfJoke = containerJoke === null || containerJoke === void 0 ? void 0 : containerJoke.children[2];
                    jokeInDOM = document.createElement('p');
                    textJoke = document.createTextNode(id + "     " + joke);
                    jokeInDOM.appendChild(textJoke);
                    console.dir(checkIfJoke === null || checkIfJoke === void 0 ? void 0 : checkIfJoke.tagName);
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
                    return [2 /*return*/];
            }
        });
    });
}
function setPoints(e, jokeReport) {
    // se
    var realReport = __assign(__assign({}, jokeReport), { points: e.target.value }); // si le doy varias veces a un boton se añaden tantas veces en el reportedArray
    generateReport(realReport);
}
function generateReport(joke) {
    reportedJokes = __spreadArray(__spreadArray([], reportedJokes), [joke]);
}
