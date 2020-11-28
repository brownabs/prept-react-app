import Axios from 'axios';

const baseUrl = 'https://prept-1eda9.firebaseio.com/';

const getQuestions = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export { getQuestions };
