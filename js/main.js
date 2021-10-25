
//svolgimento

let chess = document.querySelector('.chess');

for (var i=1; i<=70; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

      chess.innerHTML += "<div class='red'>fizzbuzz</div>";

    } else if (i % 3 === 0) {

      chess.innerHTML += "<div class='green'>fizz</div>";

    } else if (i % 5 === 0) {

      chess.innerHTML += "<div class='yellow'>buzz</div>";

    } else {

      chess.innerHTML += "<div class='square'>" + i + "</div>";
    }
}