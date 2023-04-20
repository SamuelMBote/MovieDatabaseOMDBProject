export default interface ISearchbyTitle {
  title: string;
  type?: 'movie' | 'series' | 'episode';
  year: string | null;
  plot: 'short' | 'full';
}
