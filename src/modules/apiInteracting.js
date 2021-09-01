/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const urlGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VhnmOHGBsQdsWSdfuXHy/scores/';

const postApi = async () => {
  const userName = document.getElementById('name');
  const userScore = document.getElementById('score');

  const data = await fetch(urlGame, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(
      {
        user: `${userName.value}`,
        score: `${userScore.value}`,
      },
    ),
  });
  const res = await data.json();
  console.log(result);
  return res;
};

const hideloader = () => {
  document.getElementById('loading').style.display = 'none';
};

const getApi = async (url) => {
  const response = await fetch(url);
  // Storing data in form of JSON
  const result = await response.json();
  if (!result) {
    hideloader();
  }
  console.log(result);
  return result;
};

export { postApi, getApi };
