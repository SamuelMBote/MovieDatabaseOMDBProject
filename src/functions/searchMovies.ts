import {ISearch} from '../interfaces/ISearch';
import ISearchMultiple from '../interfaces/ISearchMultiple';
import ISearchbyID from '../interfaces/ISearchbyID';
import ISearchbyTitle from '../interfaces/ISearchbyTitle';
const API_KEY = window.localStorage.getItem('apikey');
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export function searchByID({id, plot}: ISearchbyID): {URL: string} {
  let URL: string = API_URL;
  URL = API_URL + `&r=json&plot=${plot}&i=${id}`;
  return {URL};
}

export function searchByTitle({title, plot, year}: ISearchbyTitle): {
  URL: string;
} {
  let URL: string = API_URL;
  if (year) {
    URL = API_URL + `&r=json&plot=${plot}&y=${year}&t=${title}`;
  } else {
    URL = API_URL + `&r=json&plot=${plot}&t=${title}`;
  }
  return {URL};
}

export function searchMultipleTitle({
  search,
  year,
  page = '1',
}: ISearchMultiple): {
  URL: string;
} {
  let URL: string = API_URL;
  if (year) {
    URL = API_URL + `&r=json&y=${year}&page=${page}&s=${search}`;
  } else {
    URL = API_URL + `&r=json&page=${page}&s=${search}`;
  }
  return {URL};
}

export function searchMoviesList(search: ISearch): {
  request_url: string;
  request_error: string | null;
} {
  const request: {
    request_url: string;
    request_error: string | null;
  } = {
    request_url: '',
    request_error: null,
  };
  try {
    if (search.imdb) {
      const {URL} = searchByID({id: search.imdb, plot: 'short'});
      request.request_url = URL;
    } else if (search.title && search.specific === true) {
      const {URL} = searchByTitle({
        title: search.title,
        plot: 'short',
        year: search.year,
      });
      request.request_url = URL;
    } else if (search.title && search.specific === false) {
      const {URL} = searchMultipleTitle({
        search: search.title,
        year: search.year,
      });
      request.request_url = URL;
    } else {
      throw new Error('Erro na pesquisa');
    }
  } catch (error) {
    if (error instanceof Error) {
      request.request_error = error.message;
    }
  }
  return {...request};
}
