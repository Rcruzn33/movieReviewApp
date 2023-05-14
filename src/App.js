import React from 'react';
import './App.css';
import Movie from './components/Movie.js';
//import { Movies1 } from './components/Movies1';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App () { 

//movie data
  const [movie,_] = useState([        {
    Title: "Last Action Hero",
    Year: 1993,
    id: 1,
    Poster: "https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    review : []
  },
  {
    Title: "Looney Tunes: Back in Action",
    Year: 2003,
    id: 2,
    Poster: "https://m.media-amazon.com/images/M/MV5BMzRiOWNkOWUtNTAyYS00NTA4LThkZmYtZmM5Y2ZlMzhlNTk2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    review : []
  },
  {
    Title: "A Civil Action",
    Year: 1998,
    id: 3,
    Poster: "https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review : []
  },
  {
    Title: "An Action Hero",
    Year: 2022,
    id: 4,
    Poster: "https://m.media-amazon.com/images/M/MV5BMDJiOTdmMGItMmM5MC00ZTRiLWIzNjctNDE4ZTZkMWMzZTg0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_SX300.jpg",
    review : []
  },
  {
    Title: "Missing in Action",
    Year: 1984,
    id: 5,
    Poster: "https://m.media-amazon.com/images/M/MV5BNDczNDljZTUtNmZmZC00YzFkLWExYzEtYzQxNmNkNmFjMDQyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    review : []
  },
  {
    Title: "Action Point",
    Year: 2018,
    id: 6,
    Poster: "https://m.media-amazon.com/images/M/MV5BMjEyMTU5MTk1N15BMl5BanBnXkFtZTgwMzIzMzczNTM@._V1_SX300.jpg",
    review : []
  },
  {
    Title: "Action Jackson",
    Year: 1988,
    id: 7,
    Poster: "https://m.media-amazon.com/images/M/MV5BYjc0Y2E2ZjYtZGQxNi00NDgxLTk0OTctMDAzYTg1MzFmMjI4XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
    review : []
  },
  {
    Title: "321 Action",
    Year: 2020,
    id: 8,
    Poster: "https://m.media-amazon.com/images/M/MV5BYTRmYzgyZjEtN2UyZS00NDYxLTlkMDctMGJjZjY0ODExNWE5XkEyXkFqcGdeQXVyNjI2ODk3NTM@._V1_SX300.jpg",
    review : []
  },
  {
    Title: "Missing in Action 2: The Beginning",
    Year: 1985,
    id: 9,
    Poster: "https://m.media-amazon.com/images/M/MV5BOTFhNTdiNDQtZGQ4Ny00MDA1LTg1ZjEtYzZhMGU5YjBjNTBhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    review : []
  },
  {
    Title: "Class Action",
    Year: 1991,
    id: 10,
    Poster: "https://m.media-amazon.com/images/M/MV5BNWY5Mjk4ZmItMTAzYS00NWE3LWEzYzYtNDgzY2MwMzA3MDIzXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    review : []
  }])
  

  return (
    <div>  {/*movie list*/}
      {movie.map((movie, index) => (
        <div key={index}>
          <Movie data={movie} />
        </div>
      ))}
    </div>
  );
}

export default App;

              // addNewReview={addNewReview()}
              // deleteReview={deleteReview}

  // const deleteReview = (movie, review) => {
  //   const index = movie.review.indexOf(review);
  //   movie.review.splice(index, 1);
  //   setMovie([...movie]);
  // };

  // const addNewReview = (movie, review) => {
  //   movie.review.push(review);
  //   setMovie([...movie.review]);
  // };
  {/*
 {/* const addReview = (reviews,id) =>{
    let review = reviews
    movies[id-1].review.push(review)
  }
  

console.log(movies);

  return (
   <>
        <div >
        {/*{movies.map((m) => (
          <Movie title={m.Title} year={m.Year} poster={m.Poster} id={m.id} addReview={addReview} movies={movies} review={m.review}/>
        
        ))}
     

          {this.state.movies.map((movie, index) => (
            <div key={index}>
              <Movie
                data={movie}
                addNewReview={this.addNewReview}
                deleteReview={this.deleteReview}
              />
        
              <img src={movie.Poster} />
              <h1>{movie.Title}, {movie.Year}</h1>
            </div>
          ))}
         
        </div>
    
        
      </>
    );
          }

export default App;


{/*
constructor(props) { 
  super(props) ;
  this.state = {
   //movies: movie,
  }; 
  this.addNewReview = this.addNewReview.bind(this); 
  this.deleteReview =this.deleteReview.bind(this); 
}
deleteReview (e, movie, review) { 
 const index = movie.reviews.indexOf(review); 
 movie.reviews.splice(index, 1); 
 this.setState({
   movies: this.state.movies,
 });
}
addNewReview(e, movie, review) {
 movie.reviews.push(review)
 this.setState({
   movies: this.state.movies,
 });
}

className='image-container'

*/}