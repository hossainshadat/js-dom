function selectPlayerLoop(btn, selectPlayer) {
  const selectedPlayer = document.getElementById("selected-player");
  const tr = document.createElement("tr");

  for (let i = 0; i < selectPlayer.length; i++) {
    if (!(selectPlayer.length <= 5)) {
      alert("Please select maximum 5 Player ");
      return;
    } else {
      tr.innerHTML = `
      <th>${i + 1}</th>
      <td>${selectPlayer[i].title}</td>`;
      btn.classList.add("btn-disabled");
    }
  }
  selectedPlayer.appendChild(tr);
}
