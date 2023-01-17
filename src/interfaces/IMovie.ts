type Genre = {
  id: number;
  name:string;
} 

export interface IMovie {
  genres: Genre[];
  title: string;
  formattedDate: string; 
  overview: string;
  poster_path: string;
  backdrop_path: string;
}