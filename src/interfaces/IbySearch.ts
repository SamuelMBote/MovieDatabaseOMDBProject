export default interface bySearch {
  search: string;
  type?: 'movie' | 'series' | 'episode';
  year?: number;
  return?: 'json' | 'xml';
  page?: number;
  callback?: string;
  version?: 1;
}
