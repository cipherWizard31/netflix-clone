import Row from "./Row";
import "./App.css";
import requests from "./requsets";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={false}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title="Documentary Movies"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}
      />
      <Row
        title="Animation Movies"
        fetchUrl={requests.fetchAnimationMovies}
        isLargeRow={false}
      />
    </div>
  );
}

export default App;
