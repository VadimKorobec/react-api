const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '8944f736087047f8879ae82d5af2a170';

export const getNews = searchText => {
  return fetch(`${BASE_URL}/everything?q=${searchText}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });
};
