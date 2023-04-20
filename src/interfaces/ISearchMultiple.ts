export default interface ISearchMultiple {
  search: string;
  type?: 'movie' | 'series' | 'episode';
  year: string | null;
  page?: string;
}
