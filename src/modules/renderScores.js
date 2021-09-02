const table = document.getElementById('score-table');

const render = (users) => {
  users.forEach((player, index) => {
    const { user, score } = player;
    table.innerHTML += `<tr id="user-${index}">
    <td id="name-${index}">${user}</td>
    <td id="score-${index}">${score}</td>
    </tr>`;
  });
};

export default render;