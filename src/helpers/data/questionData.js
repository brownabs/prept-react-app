<<<<<<< HEAD
import Axios from 'axios';
=======
import axios from 'axios';
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c

const baseUrl = 'https://prept-1eda9.firebaseio.com/';

const getQuestions = () => new Promise((resolve, reject) => {
<<<<<<< HEAD
  Axios.get(`${baseUrl}.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
=======
  axios.get(`${baseUrl}.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c
});

export default { getQuestions };
