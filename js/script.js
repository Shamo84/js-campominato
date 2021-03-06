$(document).ready(function() {
  tentativi = 84;
  reset();

  $("#difficolta").change(function() {
    sceltaDifficolta();
  });


  ////////////////////// tasto gioca
  $(".container .cella").click(function() {
    NumeroScelto = $(this).index()+1;
    if (numeriVecchi.indexOf(NumeroScelto) == -1) {
      numeriVecchi.push(NumeroScelto);
      if (randomArray.indexOf(NumeroScelto) != -1) {
        trovato = true;
        for (var i = 0; i < randomArray.length; i++) {
          document.getElementById('cella' + randomArray[i]).classList.add('brown');
        }
        document.getElementById('cella' + NumeroScelto).classList.add('red');
        $("#overlay #testo p").text("Hai perso, ritenta!");
        $("#overlay").show();
      }
      else {
        document.getElementById('cella' + NumeroScelto).classList.add('green');
        punteggio += 1;
        document.getElementById('punteggio').innerHTML = "Punteggio: " + punteggio;
      }
    }
    if (punteggio == 1) {
      $("#difficolta").hide();
    }
    if (trovato == false && punteggio >= tentativi) {
      $("#overlay #testo p").text("Hai vinto, complimenti!");
      $("#overlay").show();
    }
  });

  // TASTO OK
  $("#ok").click(function() {
    reset();
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
 // resetta il gioco alle impostazioni iniziali
  function reset() {
    punteggio = 0;
    trovato = false;
    numeriVecchi = [];
    sceltaDifficolta();
    $("#overlay").hide();
    $(".container > div.green").removeClass("green");
    $(".container > div.red").removeClass("red");
    $(".container > div.brown").removeClass("brown");
    document.getElementById('punteggio').innerHTML = "Punteggio: " + punteggio;
    $("#difficolta").show();
  }
  // aggiusta tutto in base alla difficoltà scelta
  function sceltaDifficolta() {
    difficolta = $('#difficolta').val();
    switch (difficolta) {
      case "difficile":
      tentativi = 34;
      for (var k = 51; k <= 100; k++) {
        document.getElementById('cella' + k).classList.add('display-none');
      }
      arrayNum = numArrayGen(1, 50);
      randomArray = pickFromArray(arrayNum, 16);
      break;
      case "intermedio":
      tentativi = 64;
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
      for (var m = 51; m <= 100; m++) {
        document.getElementById('cella' + m).classList.remove('display-none');
      }
      arrayNum = numArrayGen(1, 100);
      randomArray = pickFromArray(arrayNum, 16);
    }
    console.log(randomArray);
  }
});
