import Axios from 'axios';

const baseUrl = 'https://prept-1eda9.firebaseio.com/';

const getQuestions = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

export default { getQuestions };
