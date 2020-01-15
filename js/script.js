punteggio = 0;
trovato = false;
alreadyUsed = false;
numeriVecchi = [];
y = 0;
tentativi = 84;
arrayNum = numArrayGen(1, 100);
randomArray = pickFromArray(arrayNum, 16);
console.log(randomArray);

document.getElementById('difficolta').addEventListener("change",
function() {
  difficolta = document.getElementById('difficolta').value;
  switch (difficolta) {
    case "difficile":
    tentativi = 34;
    document.getElementById('input').placeholder = "Inserisci un numero da 1 a 50"
    for (var k = 51; k <= 100; k++) {
      document.getElementById('cella' + k).classList.add('display-none');
    }
    arrayNum = numArrayGen(1, 50);
    randomArray = pickFromArray(arrayNum, 16);
    break;
    case "intermedio":
    tentativi = 64;
    document.getElementById('input').placeholder = "Inserisci un numero da 1 a 80"
    for (var n = 51; n <= 80; n++) {
      document.getElementById('cella' + n).classList.remove('display-none');
    }
    for (var l = 81; l <= 100; l++) {
      document.getElementById('cella' + l).classList.add('display-none');
    }
    arrayNum = numArrayGen(1, 80);
    randomArray = pickFromArray(arrayNum, 16);
    break;
    default:
    tentativi = 84;
    document.getElementById('input').placeholder = "Inserisci un numero da 1 a 100"
    for (var m = 51; m <= 100; m++) {
      document.getElementById('cella' + m).classList.remove('display-none');
    }
    arrayNum = numArrayGen(1, 100);
    randomArray = pickFromArray(arrayNum, 16);
  }
  console.log(randomArray);
});


////////////////////// tasto gioca
document.getElementById('gioca').addEventListener('click',
function() {
  NumeroScelto = parseInt(document.getElementById('input').value);
  // con la funzione searchInArray verifico che il numero non sia mai stato usato
  if (numeriVecchi.indexOf(NumeroScelto) != -1) {
    alreadyUsed = true;
    alert("numero già usato");
  }
  document.getElementById('input').value = "";
  if (alreadyUsed == false) {
    numeriVecchi.push(NumeroScelto);
    if (randomArray.indexOf(NumeroScelto) != -1) {
      trovato = true;
    }
    console.log(NumeroScelto);
    if (trovato == false) {
      document.getElementById('cella' + NumeroScelto).classList.add('green');
      punteggio += 1;
      document.getElementById('punteggio').innerHTML = "Punteggio: " + punteggio;
    } else {
      for (var i = 0; i < randomArray.length; i++) {
        document.getElementById('cella' + randomArray[i]).classList.add('brown');
      }
      document.getElementById('cella' + NumeroScelto).classList.add('red');
    }
  }
  if (trovato == false && y == tentativi) {
    alert('hai vinto');
  }
});

// avvia il gioco alla pressione di invio sull'input
document.getElementById("input").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("gioca").click();
  }
});

// genera un array con numeri interi in sequenza da min a max.
function numArrayGen(min, max) {
  var arrayNum = [];
  for (var i = min; i <= max; i++) {
  arrayNum.push(i);
  }
  return arrayNum;
}

// prende "num" numeri random pescati da array e li rimuove.
function pickFromArray(array, num) {
  var randomArray = [];
  for (var i = 1; i <= num; i++) {
    var randomNum = Math.floor(Math.random() * array.length);
    randomArray.push(array[randomNum]);
    array.splice(randomNum, 1);
  }
  return randomArray;
}

// cerca un numero in un array
function searchInArray(array, num) {
  alreadyUsed = false
  var z = 0;
  do {
    if (num == array[z]) {
      alert("numero già usato");
      alreadyUsed = true;
    }
    z++;
  } while (alreadyUsed == false && z < array.length);
  return alreadyUsed;
}
