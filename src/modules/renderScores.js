/* eslint-disable import/prefer-default-export */

const table = document.getElementById('score-table');

/* const players = [
  {
    name: 'Name',
    score: 100,
  },
]; */

export const render = (users) => {
  users.forEach((player, index) => {
    const { name, score } = player;
    table.innerHTML += `<tr id="user-${index}">
    <td id="name-${index}">${name}</td>
    <td id="score-${index}">${score}</td>
    </tr>`;
  });
};