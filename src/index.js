import _ from 'lodash';
import './style.css';

const players = [
  {
    name: 'Name',
    score: 100,
  },
  {
    name: 'Hamza',
    score: 40,
  },
  {
    name: 'Larry',
    score: 12,
  },
  {
    name: 'Ewa',
    score: 70,
  },
  {
    name: 'Jacob',
    score: 55,
  },
  {
    name: 'Carlos',
    score: 60,
  },
];

const render = () => {
  const table = document.getElementById('score-table');
  players.forEach((player, index) => {
    const { name, score } = player;
    table.innerHTML += `<tr id="user-${index}">
    <td id="name-${index}">${name}</td>
    <td id="score-${index}">${score}</td>
    </tr>`;
  });
};

render();