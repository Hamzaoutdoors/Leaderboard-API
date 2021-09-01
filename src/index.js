/* eslint-disable no-unused-vars */
import 'lodash';
import './style.css';
import render from './modules/renderScores.js';
import { postApi, getApi } from './modules/apiInteracting.js';

const urlGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VhnmOHGBsQdsWSdfuXHy/scores/';
const form = document.getElementById('form');
const refresh = document.getElementById('refresh');
const table = document.getElementById('score-table');

refresh.addEventListener('click', () => {
  getApi(urlGame)
    .then((response) => {
      table.innerHTML = '';
      render(response.result);
    });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postApi();
  e.target.reset();
});

getApi(urlGame)
  .then((res) => {
    render(res.result);
  });