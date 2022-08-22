function calcPerPlayerExpense(arr) {
  const perPlayer = document.getElementById("per-player");
  const calcButton = document.getElementById("calcBtn");
  const totalPlayerExpense = document.getElementById("total-player-expense");

  calcButton.addEventListener("click", function () {
    const perPlayerValue = Number(perPlayer.value);

    const totalSelectPlayer = arr.length;

    totalPlayerExpense.innerText = totalSelectPlayer * perPlayerValue;
    const playerExpenseTotal = totalPlayerExpense.innerText;

    totalCalculation(playerExpenseTotal);
  });
}

function totalCalculation(playerExpenseTotal) {
  let managerExpense = document.getElementById("manager-expense");
  let coachExpense = document.getElementById("coach-expense");
  const totalCalculationBtn = document.getElementById("totalCalculationBtn");
  const totalExpense = document.getElementById("total-expense");

  //   managerExpense.innerText = "";
  //   coachExpense.value = "";

  totalCalculationBtn.addEventListener("click", function () {
    const managerExpenseAmt = Number(managerExpense.value);
    const coachExpenseAmt = Number(coachExpense.value);

    totalExpense.innerText =
      managerExpenseAmt + coachExpenseAmt + Number(playerExpenseTotal);
  });
}
