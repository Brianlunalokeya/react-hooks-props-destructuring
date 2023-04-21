import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const movie1 = {
    title: "Mad Max",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM",
    genresArr: ["Action", "Adventure", "Science Fiction", "Thriller"],
  };
  const movie2 = {
    title: "The Shawshank Redemption",
    posterURL: "https://c8.alamy.com/comp/BKH04B/the-shawshank-redemption-1994-poster-shwk-003vs-BKH04B.jpg",
    genresArr: ["Drama"]
  };
  return (
    <div className="App">
      <MovieCard title={movie1.title} genres={movie1.genresArr} />
      <MovieCard title={movie2.title} posterSrc={movie2.posterURL} genres={movie2.genresArr} />
    </div>
  );
}

export default App;
