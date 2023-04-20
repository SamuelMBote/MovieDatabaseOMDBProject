import IMoviePartial from '../IMoviePartial';

export default function isMovie(obj: any): obj is IMoviePartial {
  if (
    obj &&
    typeof obj === 'object' &&
    'Title' in obj &&
    'Year' in obj &&
    'imdbID' in obj &&
    'Type' in obj &&
    'Poster' in obj
  ) {
    return true;
  } else {
    return false;
  }
}
