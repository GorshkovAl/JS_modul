import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { renderCalc, renderTimer} from "./render.js";
import {formatTimeLeft} from "./timer.js";

 var sound = new Howl({
 src: ['./audio/Sound_11342.wav']
 });



const b1= document.getElementById('btn-calc')	;
const b2= document.getElementById('btn-timer')	;
const renderPlace = document.getElementById('workfield');

b1.addEventListener('click',callCalc)

function callCalc(event) {
  event.preventDefault();

  renderCalc(renderPlace);


const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}
}

b2.addEventListener('click',callTimer)

function callTimer(event) {
  event.preventDefault();
  renderTimer(renderPlace);

  var CommonObj = {};
  const showUserTime= document.getElementById('showCounter');
  const userInput=document.getElementById('timeLimit');
  var switchBtn = document.querySelector('input[type="submit"]');

  switchBtn.addEventListener ('click', sentCountLimit);
  function sentCountLimit(event){
    event.preventDefault();
    CommonObj.user=userInput.value;
  showUserTime.innerHTML=formatTimeLeft(userInput.value);
  }

  //---------------------------------------------------------

  const startBtn =document.getElementById('startButton');
  const stopBtn=document.getElementById('stopButton');
  var timerInterval = null;


  startBtn.addEventListener ('click',startTimer);

  function startTimer() {
  let timeLimit =CommonObj.user;

  let timePassed = 0;
  let timeLeft = timeLimit;

  console.log("timeLimit:   "+timeLimit);

      timerInterval = setInterval(() => {

      timePassed = timePassed += 1;
      timeLeft = timeLimit - timePassed;
      CommonObj.user=timeLeft;

  if(timeLeft<0){

 sound.play();
     return ;
  };

      showUserTime.innerHTML=formatTimeLeft(timeLeft);
    }, 1000);
  }

  stopBtn.addEventListener ('click',stopTimer);

   function stopTimer() {
        clearInterval(timerInterval);
      }
}
