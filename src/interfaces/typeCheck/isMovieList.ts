import {IMovieList} from '../IMovieList';

export default function isMovieList(obj: any): obj is IMovieList {
  if (
    obj &&
    typeof obj === 'object' &&
    'Search' in obj &&
    'totalResults' in obj &&
    'Response' in obj
  ) {
    return true;
  } else {
    return false;
  }
}
