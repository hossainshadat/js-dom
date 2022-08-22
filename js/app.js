let selectPlayer = [];

function selectBtn(btn) {
  const title = btn.parentNode.parentNode.children[0].innerText;

  const selectedPlayer = document.getElementById("selected-player");

  selectedPlayer.innerText = "";

  const playerName = {
    title: title,
  };

  selectPlayer.push(playerName);

  for (let i = 0; i < selectPlayer.length; i++) {
    const tr = document.createElement("tr");

    if (selectPlayer.length <= 5) {
      tr.innerHTML = `
      <th>${i + 1}</th>
      <td>${selectPlayer[i].title}</td>`;
      btn.classList.add("btn-disabled");
    } else {
      alert("Please select maximum 5 Player ");
      break;
    }

    selectedPlayer.appendChild(tr);
  }
  calcPerPlayerExpense(selectPlayer);
}
