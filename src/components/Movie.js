import React from 'react';
import NewReviewForm from './reviewForm';
import styles from './Movies.module.css';



const Movie = (props) => {
  return ( 
  <div className={styles.movies}>
    <div>  {/*Movie Component*/}
      
      <h1> {props.data.Title}</h1>
      <h2>{props.data.Year}</h2>
      <img src={props.data.Poster} alt={props.data.Title} />
    </div>
    <div className={styles.center}>
      <NewReviewForm
        data={props.data} />
    </div>
    </div>
    
  );
}

export default Movie;


