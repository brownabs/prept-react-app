import Axios from 'axios';

const baseUrl = 'https://prept-1eda9.firebaseio.com/';

// have one of the students create the get request
// make sure resolve includes object.values as this is all that is needed
// export and go back to flashCard - index.js
const getQuestions = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

export default { getQuestions };
