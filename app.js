/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let rezultatIgrac0 = 0;
let rezultatIgrac1 = 0;
let zbrojBacanja = 0;
zadnjeBacanje = 0;
trenutniIgrac = 'name-0';

const novaIgraBtn = document.querySelector('.btn-new');
const baciKocku = document.querySelector('.btn-roll');
const zadrziRazultat = document.querySelector('.btn-hold');
const aktivIgrac0 = document.querySelector('.player-0-panel')
const aktivIgrac1 = document.querySelector('.player-1-panel')
const kockaEkran= document.querySelector('.kocka');

const trenutnoBacanjeIgrac0 = document.getElementById('igrac-0');
const trenutnoBacanjeIgrac1 = document.getElementById('igrac-1');

const ukupnirezultatIgrac0 = document.getElementById('score-0');
const ukupnirezultatIgrac1 = document.getElementById('score-1');
console.log(aktivIgrac1 )


function novaIgra() {
  kockaEkran.src="dice.jpg"
  rezultatIgrac0 = 0;
  rezultatIgrac1 = 0;
  zbrojBacanja = 0;
  trenutnoBacanjeIgrac0.textContent = 0;
  trenutnoBacanjeIgrac1.textContent = 0;
  ukupnirezultatIgrac0.textContent = 0;
  ukupnirezultatIgrac1.textContent = 0;
  
};

function bacajKockuFun(){

  let kocka = (Math.floor(Math.random() * 6)) + 1 ;
  if(zadnjeBacanje === 6 && kocka === 6) {
    if (trenutniIgrac === 'name-1') {
      aktivIgrac1.classList.remove('active');
      aktivIgrac0.classList.add('active');
      rezultatIgrac1 = 0
    }  else {
      aktivIgrac1.classList.add('active');
      aktivIgrac0.classList.remove('active');
      rezultatIgrac0 = 0
    }
  } else if (kocka>1) {
    zbrojBacanja += kocka;
  } else {
    zbrojBacanja = 0;
         if (trenutniIgrac === 'name-1') {
                trenutniIgrac = 'name-0';
                aktivIgrac1.classList.remove('active');
                aktivIgrac0.classList.add('active');
          }  else {
                trenutniIgrac = 'name-1';
                aktivIgrac1.classList.add('active');
                aktivIgrac0.classList.remove('active');
          }
  }

  zadnjeBacanje = kocka;
  console.log('  rezultatIgrac0= ' + rezultatIgrac0 + ' rezultatIgrac1= ' + rezultatIgrac1 + ' Kocke= ' + kocka )
  console.log('zbroj bacanja= ' + zbrojBacanja);

  kockaEkran.src = 'dice-'+ kocka + '.png'

}


function zadrziBacanje () {
  if( trenutniIgrac === 'name-0') {
    rezultatIgrac0 =  rezultatIgrac0 + zbrojBacanja;
    trenutniIgrac = 'name-1';
    aktivIgrac1.classList.add('active');
    aktivIgrac0.classList.remove('active');
  } else {
    rezultatIgrac1 =  rezultatIgrac1 + zbrojBacanja;
    trenutniIgrac = 'name-0'
    aktivIgrac1.classList.remove('active');
    aktivIgrac0.classList.add('active');
  }

  zbrojBacanja = 0;
  prviPuta = 0;
  console.log('rezultatIgrac0= ' + rezultatIgrac0 + ' rezultatIgrac1= ' + rezultatIgrac1 + ' Igrac: ' + trenutniIgrac )

}



baciKocku.addEventListener('click', bacajKockuFun)
novaIgraBtn.addEventListener('click', novaIgra);
zadrziRazultat .addEventListener('click', zadrziBacanje)





