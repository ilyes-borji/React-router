
import './App.css';
import './Component/MoviesData'
import {useState} from 'react'
import { MoviesData } from './Component/MoviesData';
import AddMouvie from './Component/AddMovies'
import MoviesList from './Component/MoviesList';
import Navbarr from './Component/Navbarr';
import App1 from './App1'
import AppRouter from './router/router'

function App() {
  // const [movies ,setMovies]=useState(MoviesData)
  // const [name ,setName]=useState("")
  // const [ratingSearch , setRatingSearch]=useState(0)
  // let AddFilm =(newmovie , e)=>{
  //   e.preventDefault()
  //   setMovies([...movies,newmovie])
  // }

  return (
    
    <div className="App">
      <AppRouter />
      {/* <header className="App-header">></header> */}

{/* <Navbarr name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/><br/>
<AddMouvie AddFilm={AddFilm}/>
    <MoviesList movies={movies} name={name} ratingSearch={ratingSearch}/>
     */}
    
  
    </div>
  );
}

export default App;
