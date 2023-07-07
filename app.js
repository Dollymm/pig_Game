const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')

const score0El = document.getElementById("Score--0");
const score1El = document.getElementById("Score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const current0El = document.getElementById("current--0");
const current0E2 = document.getElementById("current--1");
const btnRoll = document.querySelector(".btn--roll");
const btHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const Score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing=true;

const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
   player0El.classList.toggle('player-active');
   player1El.classList.toggle('player-active');
   

}
//rolling dice
btnRoll.addEventListener('click', function () {
    if(playing){
  //genearting a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //check for rolled 1 if true ,
  if (dice !==1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
}
 
});
btHold.addEventListener('click',function(){
    if(playing){
    // add current score to active players score
    Score[activePlayer]+=currentScore;
    // 
    document.getElementById(`Score--${activePlayer}`).textContent=Score[activePlayer];
// check if player score is >=100
if (Score[activePlayer]>=20){

    //finish game
    playing=false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
}else{
    switchPlayer();
}
    }
});
