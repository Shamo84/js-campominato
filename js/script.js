arrayNum = numArrayGen(1, 100);
randomArray = pickFromArray(arrayNum, 16);
console.log(randomArray);

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

punteggio = 0;
trovato = false;
numeriVecchi = [];
y = 0;
document.getElementById('gioca').addEventListener('click',
function() {
  vecchio = false
  NumeroScelto = document.getElementById('input').value;
  var z = 0;
  do {
    if (NumeroScelto == numeriVecchi[z]) {
      alert("numero già usato");
      vecchio = true;
    }
    z++;
  } while (vecchio == false && z < numeriVecchi.length);
  document.getElementById('input').value = "";
  if (vecchio == false) {
    numeriVecchi.push(NumeroScelto);
    var j = 0;
    do {
      if (NumeroScelto == randomArray[j]) {
        trovato = true;
      }
      j++;
    } while (trovato == false && j < 16);
    y++;
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
  if (trovato == false && y == 84) {
    alert('hai vinto');
  }
});
