import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map((movie, index) => (
        <Col key={index} sm={12} md={6} lg={4} className="d-flex justify-content-center">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
