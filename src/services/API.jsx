const USER_KEY = '35801330-a68fa5b5cd22960980978c13a';
const BASE_URL = `https://pixabay.com/api/`;

const getPictures = (pictures, page = 1) => {
  return fetch(
    `${BASE_URL}?key=${USER_KEY}&image_type=photo&orientation=horizontal&q=${pictures}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Sorry ${pictures} not `));
  });
};

export const API = { getPictures };
