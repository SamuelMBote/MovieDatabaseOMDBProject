export default interface IbyIDorTitle {
  iMDbID: string | '';
  title: string | '';
  type?: 'movie' | 'series' | 'episode';
  year?: number;
  plot?: 'short' | 'full';
  return?: 'json' | 'xml';
  callback?: string;
  version?: 1;
}
