function selectPlayerLoop(btn, selectPlayer) {
  const selectedPlayer = document.getElementById("selected-player");

  selectedPlayer.innerText = "";

  for (let i = 0; i < selectPlayer.length; i++) {
    const tr = document.createElement("tr");

    if (!(selectPlayer.length <= 5)) {
      alert("Please select maximum 5 Player ");
      break;
    } else {
      tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${selectPlayer[i].title}</td>`;
      btn.classList.add("btn-disabled");
    }

    selectedPlayer.appendChild(tr);
  }
}
