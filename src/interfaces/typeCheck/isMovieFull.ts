import {IMovieFull} from '../IMovieFull';

export default function isMovieFull(obj: any): obj is IMovieFull {
  if (
    obj &&
    typeof obj === 'object' &&
    'Title' in obj &&
    'Year' in obj &&
    'imdbID' in obj &&
    'Type' in obj &&
    'Poster' in obj &&
    'Title' in obj &&
    'Year' in obj &&
    'Rated' in obj &&
    'Released' in obj &&
    'Runtime' in obj &&
    'Genre' in obj &&
    'Director' in obj &&
    'Writer' in obj &&
    'Actors' in obj &&
    'Plot' in obj &&
    'Language' in obj &&
    'Country' in obj &&
    'Awards' in obj &&
    'Poster' in obj &&
    'Ratings' in obj &&
    'Metascore' in obj &&
    'imdbRating' in obj &&
    'imdbVotes' in obj &&
    'imdbID' in obj &&
    'Type' in obj &&
    'DVD' in obj &&
    'BoxOffice' in obj &&
    'Production' in obj &&
    'Website' in obj &&
    'Response' in obj
  ) {
    return true;
  } else {
    return false;
  }
}
