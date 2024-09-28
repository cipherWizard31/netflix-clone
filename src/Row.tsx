import {useState, useEffect} from 'react'
import instance from './axios'
import './Row.css'
import movieTrailer from 'movie-trailer'
import YouTube from "react-youtube"


const base_url = "https://image.tmdb.org/t/p/original"
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")


useEffect(() => {
  async function fetchData() {
    const request = await instance.get(fetchUrl)

    setMovies(request.data.results)
    // console.log(request)
    return request;
  }
  fetchData();
}, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = (movie: any) => {
    if(trailerUrl){
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url: any) => {
          const UrlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(UrlParams.get("v"))
        })
        .catch((error: any) => console.log(error))
    }
    // alert(`${movie.name}`)
    }


  return (
    
    <div className='row'>
    <h1>{title}</h1>
    
   <div className="row__posters">
   {movies.map((movie) => (
      <img 
      onClick={() => handleClick(movie)}
      className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`}
      alt={movie.name} 
      />
    ))}
    </div>
    <div style={{ padding: "40px" }}>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
    </div>
  
  )
}

export default Row