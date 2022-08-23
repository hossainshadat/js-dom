let selectPlayer = [];

function selectBtn(btn) {
  const title = btn.parentNode.parentNode.children[0].innerText;

  const playerName = {
    title: title,
  };

  selectPlayer.push(playerName);

  selectPlayerLoop(btn, selectPlayer);
  calcPerPlayerExpense(selectPlayer);
}
