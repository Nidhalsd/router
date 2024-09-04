import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Trailer.css';

const Trailer = ({ movie }) => {
  const { id } = useParams();
  const foundMovie = movie.find((el) => el.id === +id);
  
  return (
    <div className="trailer-container">
      <h2>{foundMovie.title}</h2>
      <p>{foundMovie.description}</p>
      <iframe
        src={foundMovie.Trailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
};

export default Trailer;
