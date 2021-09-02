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
  return res;
};

const getApi = async (url) => {
  const response = await fetch(url);
  // Storing data in form of JSON
  const result = await response.json();
  if (result) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('header').classList.add('h1-decoration');
  }
  return result;
};

export { postApi, getApi };
