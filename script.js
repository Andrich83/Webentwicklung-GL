console.log('Hallo World!');

var x = 10; // Bitte nicht machen!!! Alt...
let y = 20; // variable Variable
const PI = 3.141592; // constante Variable

let abc = "dfgdfgdfggdgf";

const clock_elem = document.getElementById('clock');
const joke_elem = document.querySelector('[joke-norris]');


console.log(clock_elem);

clock_elem.innerText = 'Buxtehude';

function getTime() {
    let date = new Date();
    let hours = '0' + date.getHours();
    let minutes = '0' + date.getMinutes();
    let seconds = '0' + date.getSeconds();

    return `${hours.slice(hours.length - 2, hours.length)}` +

    `:${minutes.slice(minutes.length - 2, minutes.length)}` +

    `:${seconds.slice(seconds.length - 2, seconds.length)}`;
}
// return "" +
//    (hours < 10 ? ("0" + hours) : hours) + ":" +
//    (minutes < 10 ? ("0" + minutes) : minutes) + ":" +
//    (seconds < 10 ? ("0" + seconds) : seconds);
setInterval(() => {
clock_elem.innerText = getTime();
},100);

let number = 42;

let string = "42";

if(number == string) {
    console.log("true");
}

fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(httpResponse => {
        return httpResponse.json();
    }).then(joke => {
        joke_elem.innerText = joke.value;
    });

    const searchElem = document.getElementById('search');
    const searchFieldElem = document.getElementById('search-field');
    const searchString = "https://www.google.de/";
    
    /* EventListener => suchfeld öffnen SPACEBAR */
    document.addEventListener("keydown", event => {
        /* console.log(event); */
        if(event.key == " ") {
            searchFieldElem.value = '';
            searchElem.style.display = 'flex';
            searchFieldElem.focus();
        } else if (event.key == "Escape") {
            searchFieldElem.blur();
            searchElem.style.display = 'none';
        }
    });
    
    searchFieldElem.addEventListener("keydown", event => {
        if (event.key == "Enter") {
            let query = searchFieldElem.value;
            /* Öffne im aktuellen Tab die Seite mit der angegebenen
                URL */
            window.open(searchString + query, "_self");
        }
    });