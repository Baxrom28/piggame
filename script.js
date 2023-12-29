
// oyinchilar ballarini chaqirib olingani
let score0El = document.getElementById(`score--0`);
let score1El = document.getElementById(`score--1`);

// foni ozgartirish uchun
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

let scores, activePlayer, playing, diceEl, correntScore, corrent1El, corrent0El;

// toshlarni chaqirib olingani
diceEl = document.querySelector(`.dice`);

// boshalangich narsalar 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);


// buttonlar 
let btnNew = document.querySelector(`.btn--new`);
let btnRoll = document.querySelector(`.btn--roll`);
let btnHold = document.querySelector(`.btn--hold`);



// oyinchi yigaan ball elementlari hali asosiy balga otmagani
corrent0El = document.getElementById(`current--0`);
corrent1El = document.getElementById(`current--1`);




// oyinchiga tushgan sonlar yigindisi agar bir tushsa 0 boladi
correntScore = 0;

// birinchi ikkinchini ajratish uchun oynavotgan oyinchi ni chaqirish uchun
scores = [0, 0];
activePlayer = 0;

// oyin ketvotganini bildirish uchun
playing = true;




// agar hol bosa yoki 1 tushsa bosayotgan bali 0 bolib qolishi uchun function
const switchPlayer = function () {

  // 1 tushgandan keyin ball 0 bolib qolishi uchun
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // ikkinchi odamni activ qilish uchun
  activePlayer = activePlayer === 0 ? 1 : 0;

  // bir tushgan holat 0 bolib qolishi uchun
  correntScore = 0;

  // foni ozgartirish 1 va 2 uchun
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
}

// tosh otish functionlari
btnRoll.addEventListener(`click`, function () {

  // oyin tugagani ni tekshirish uchun if oni tugamaganini tekshiradi yani if 
  if (playing) {
    // toshaylanishi uchun
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);


    // toshni korsatish uchun
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;


    // agar tosh bir tushsa 2 chi oyinchiga otishi kerak tushmasa correntScore ga qoshiladi
    if (dice !== 1) {


      // bir tushmagan holat
      correntScore += dice;


      // aktivnisiga qoshish uchun
      document.getElementById(`current--${activePlayer}`).textContent = correntScore;

    } else {
      switchPlayer();
    }
  }
});





// holni bosish 
btnHold.addEventListener(`click`, function () {
  if (playing) {
    // oyinchini Balliga qoshadi asosiy balga
    scores[activePlayer] += correntScore;

    // keyingi oyinchi uchun
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  }


  // 100dan katta bolsa yutishi uchun 
  if (scores[activePlayer] >= 100) {
    playing = false;
    diceEl.classList.add(`hidden`);
    btnRoll.classList.add(`hidden`);
    btnHold.classList.add(`hidden`);
    document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
    document.querySelector(`.player--${activePlayer}`).classList.add(`.player--activePlayer`);
  } else {
    // asosiybolmaga ball  bolib qolishi uchun 
    switchPlayer();
  }
});

btnNew.addEventListener(`click`, function () {
  scores = [0, 0];
  correntScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  corrent0El.textContent = 0;
  corrent1El.textContent = 0;

  diceEl.classList.remove(`hidden`);
  btnRoll.classList.remove(`hidden`);
  btnHold.classList.remove(`hidden`);
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

})


