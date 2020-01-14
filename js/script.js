arrayNum = numArrayGen(1, 100);
randomArray = pickFromArray(arrayNum, 16);

function numArrayGen(min, max) {
  var arrayNum = [];
  for (var i = min; i <= max; i++) {
  arrayNum.push(i);
  }
  return arrayNum;
}
function pickFromArray(array, num) {
  var randomArray = [];
  for (var i = 1; i <= num; i++) {
    var randomNum = Math.floor(Math.random() * array.length);
    randomArray.push(array[randomNum]);
    array.splice(randomNum, 1);
  }
  return randomArray;
}
console.log(randomArray);


var trovato = false;
var y = 0;
do {
  document.getElementById('gioca').addEventListener('click',
  function() {
    var NumeroScelto = document.getElementById('input').value;
    var j = 0;
    do {
      if (NumeroScelto == randomArray[j] ) {
         trovato = true;
      }
      j++;
    } while (trovato == false && j < 16);
    y++;
    if (trovato == false) {
      document.getElementById('cella' + NumeroScelto).classList.add('green');
    }
  });  
} while (trovato == false && y < 1);

if (trovato == false) {
  alert('hai vinto');
}
