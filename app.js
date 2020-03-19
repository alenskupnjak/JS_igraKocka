let rezultatIgrac0 = 0;
let rezultatIgrac1 = 0;
let zbrojBacanja = 0;
zadnjeBacanje = 0;
trenutniIgrac = 'name-0';
const novaIgraBtn = document.querySelector('.btn-new');
const baciKocku = document.querySelector('.btn-roll');
const zadrziRazultat = document.querySelector('.btn-hold');
const aktivIgrac0 = document.querySelector('.player-0-panel');
const aktivIgrac1 = document.querySelector('.player-1-panel');
const kockaEkran= document.querySelector('.kocka');
const trenutnoBacanjeIgrac0 = document.getElementById('igrac-0');
const trenutnoBacanjeIgrac1 = document.getElementById('igrac-1');
const ukupnirezultatIgrac0 = document.getElementById('score-0');
const ukupnirezultatIgrac1 = document.getElementById('score-1');
const naslovIgrac0 = document.getElementById('name-0');
const naslovIgrac1 = document.getElementById('name-1');

novaIgra();

function novaIgra() {
  kockaEkran.src="dice.jpg";
  rezultatIgrac0 = 0;
  rezultatIgrac1 = 0;
  zbrojBacanja = 0;
  trenutnoBacanjeIgrac0.textContent = 0;
  trenutnoBacanjeIgrac1.textContent = 0;
  ukupnirezultatIgrac0.textContent = 0;
  ukupnirezultatIgrac1.textContent = 0;
  naslovIgrac0.textContent = 'Igrač 1';
  naslovIgrac1.textContent = 'Igrač 2';
};

function bacajKockuFun(){
  let kocka = (Math.floor(Math.random() * 6)) + 1 ;
  if(zadnjeBacanje === 6 && kocka === 6) {
    if (trenutniIgrac === 'name-1') {
      aktivIgrac1.classList.remove('active');
      aktivIgrac0.classList.add('active');
      rezultatIgrac1 = 0;
      ukupnirezultatIgrac1.textContent = 0;
    }  else {
      aktivIgrac1.classList.add('active');
      aktivIgrac0.classList.remove('active');
      rezultatIgrac0 = 0;
      ukupnirezultatIgrac0.textContent = 0;
    }
  } else if (kocka>1) {
    zbrojBacanja += kocka;
        if (trenutniIgrac === 'name-1'){
           trenutnoBacanjeIgrac1.textContent = zbrojBacanja;
        } else {
           trenutnoBacanjeIgrac0.textContent = zbrojBacanja;
        }
  } else {
    zbrojBacanja = 0;
         if (trenutniIgrac === 'name-1') {
                trenutniIgrac = 'name-0';
                aktivIgrac1.classList.remove('active');
                aktivIgrac0.classList.add('active');
                trenutnoBacanjeIgrac1.textContent = 0;
          }  else {
                trenutniIgrac = 'name-1';
                aktivIgrac1.classList.add('active');
                aktivIgrac0.classList.remove('active');
                trenutnoBacanjeIgrac0.textContent = 0;
          }
  }
  zadnjeBacanje = kocka;
  kockaEkran.src = 'dice-'+ kocka + '.png'
}

function zadrziBacanje () {
  if( trenutniIgrac === 'name-0') {
    rezultatIgrac0 =  rezultatIgrac0 + zbrojBacanja;
    trenutniIgrac = 'name-1';
    aktivIgrac1.classList.add('active');
    aktivIgrac0.classList.remove('active');
    ukupnirezultatIgrac0.textContent = rezultatIgrac0;
    trenutnoBacanjeIgrac0.textContent = 0;
  } else {
    rezultatIgrac1 =  rezultatIgrac1 + zbrojBacanja;
    trenutniIgrac = 'name-0'
    aktivIgrac1.classList.remove('active');
    aktivIgrac0.classList.add('active');
    ukupnirezultatIgrac1.textContent = rezultatIgrac1;
    trenutnoBacanjeIgrac1.textContent = 0;
  }

  if (rezultatIgrac0 > 50) {
    naslovIgrac0.textContent = 'Pobjednik !';
    naslovIgrac0.style.color= 'magenta';
  }

  if (rezultatIgrac1 > 50) {
    naslovIgrac1.textContent = 'Pobjednik !';
    naslovIgrac1.style.color= 'magenta';
  }
  kockaEkran.src="dice.jpg";
  zbrojBacanja = 0;
  zadnjeBacanje = 0;
}

baciKocku.addEventListener('click', bacajKockuFun);
novaIgraBtn.addEventListener('click', novaIgra);
zadrziRazultat .addEventListener('click', zadrziBacanje);





