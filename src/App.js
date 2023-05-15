import { useState } from "react";
import "./App.css";
import data from "./components/Data";
import MovieList from "./components/MovieList";
import Add from "./components/Add";
import React, { useRef } from "react";

function App() {
  const [movies, setMovies] = useState(data);
  const [newMovie, setNewMovie] = useState([]);

  const myTitle = useRef();
  const myImg = useRef();
  const myRate = useRef();
  const myDescription = useRef();

  const handleAdd = () => {
    setNewMovie([
      {
        title: myTitle.current.value,
        img: myImg.current.value,
        rate: myRate.current.value,
        description: myDescription.current.value,
      },
    ]);
    setMovies([...movies, ...newMovie]);
  };

  return (
    <div className="App">
      <Add
        myTitle={myTitle}
        myImg={myImg}
        myRate={myRate}
        myDescription={myDescription}
        handleAdd={handleAdd}
      />
      <MovieList movies={[...movies, ...newMovie]} />
    </div>
  );
}

export default App;
