export default interface IbySearch {
  search: string;
  type?: 'movie' | 'series' | 'episode';
  year?: number;
  return?: 'json' | 'xml';
  page?: number;
  callback?: string;
  version?: 1;
}
