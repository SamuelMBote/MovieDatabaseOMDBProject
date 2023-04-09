import IbyIDorTitle from '../../interfaces/IbyIDorTitle';
import IbySearch from '../../interfaces/IbySearch';

export function byIDorTitle_GET(body: IbyIDorTitle): {
  url: string;
  options: {method: 'GET'};
  body: string;
} {
  const apikey = window.localStorage.getItem('apikey');
  return {
    url: `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`,
    options: {
      method: 'GET',
    },
    body: JSON.stringify(body),
  };
}
export function bySearch_GET(body: IbySearch): {
  url: string;
  options: {method: 'GET'};
  body: string;
} {
  const apikey = window.localStorage.getItem('apikey');

  return {
    url: '',
    options: {
      method: 'GET',
    },
    body: JSON.stringify(body),
  };
}
