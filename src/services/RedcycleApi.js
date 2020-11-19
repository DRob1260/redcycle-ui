import axios from 'axios';

const getPosts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://fakestoreapi.com/products?limit=10')
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getPosts };
