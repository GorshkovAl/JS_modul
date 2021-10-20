export function renderCalc(fieldCalc){


fieldCalc.innerHTML=``;
fieldCalc.insertAdjacentHTML('beforebegin', `<form id="datecalc">
  <h3>Калькулятор дат</h3>
  <label>
      <strong>Первая дата:</strong>
      <input type="date" name="firstDate" />
  </label>
  <label>
      <strong>Вторая дата:</strong>
      <input type="date" name="secondDate" />
  </label>
  <button type="submit">Расчитать промежуток</button>
  <p id="datecalc__result"></p>
</form>`
);
}



export function renderTimer(fieldTimer){


fieldTimer.innerHTML=``;
fieldTimer.insertAdjacentHTML('beforebegin', `<form id="setTimer">

<label for="tim">Установите значение таймера (в сек.)</label>
<input type="number" name="tim" id="timeLimit" value="0" min="0" max="6000" required> <br><br>
  <input type="submit"> <br><br><br>

<button type="button" name="start" id="startButton">START</button>
<button type="button" name="stop" id="stopButton">STOP</button>
</form>
<div id="showCounter"></div>`
);
}
