/* eslint-disable no-unused-vars */
import 'lodash';
import './style.css';
import render from './modules/renderScores.js';
import { postApi, getApi } from './modules/apiInteracting.js';

const urlGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/f5n9vuYoe82B6F8funh2/scores/';

const form = document.getElementById('form');
const refresh = document.getElementById('refresh');
const table = document.getElementById('score-table');
const icon = document.querySelector('.icon');

refresh.addEventListener('click', () => {
  getApi(urlGame)
    .then((response) => {
      table.innerHTML = '';
      render(response.result);
    });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postApi(urlGame);
  e.target.reset();
});

getApi(urlGame)
  .then((res) => {
    render(res.result);
  });

icon.addEventListener('click', (e) => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    e.target.src = 'assets/images/sun.png';
  } else {
    e.target.src = 'assets/images/moon.png';
  }
});