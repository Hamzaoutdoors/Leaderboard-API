/* eslint-disable no-console */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const createNewGame = () => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: 'my cool game :D',
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default createNewGame;