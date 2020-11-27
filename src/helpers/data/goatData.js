import Axios from 'axios';

const baseUrl = 'https://react-goats.firebaseio.com/';

const getGoats = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const addGoat = (goatObj) => new Promise((resolve, reject) => {
  Axios.post(`${baseUrl}.json`, goatObj)
    .then((response) => {
      Axios.patch(`${baseUrl}/${response.data.name}.json`, { id: response.data.name })
        .then((patchResponse) => {
          resolve(patchResponse);
        }).catch((error) => reject(error));
    });
});

const updateGoat = (goatObj) => new Promise((resolve, reject) => {
  Axios.patch(`${baseUrl}/${goatObj.id}.json`, goatObj)
    .then((response) => {
      resolve(response);
    }).catch((error) => reject(error));
});

const deleteGoat = (goatId) => Axios.delete(`${baseUrl}/${goatId}.json`);

export default {
  getGoats,
  addGoat,
  updateGoat,
  deleteGoat,
};
