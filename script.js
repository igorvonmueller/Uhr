const Stunden = document.getElementById('Stunden');
const Minuten = document.getElementById('Minuten');
const Sekunden = document.getElementById('Sekunden');

const Uhr = setInterval(function () {

    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10)
        hr = '0' + hr;

    if (min < 10)
        min = '0' + min;

    if (s < 10)
        s = '0' + s;

    Stunden.textContent = hr;
    Minuten.textContent = min;
    Sekunden.textContent = s;

})