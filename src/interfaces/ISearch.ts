export interface ISearch {
  title: string | null;
  imdb: string | null;
  year: string | null;
  specific: boolean;
  page: string | null;
}

export function isISearch(obj: any): obj is ISearch {
  if (
    obj &&
    typeof obj === 'object' &&
    'title' in obj &&
    'imdb' in obj &&
    'year' in obj &&
    'specific' in obj &&
    'page' in obj
  ) {
    return true;
  } else {
    return false;
  }
}
