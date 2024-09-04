import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MovieCard.css'; 
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: '50rem' }} className="mb-4 movie-card">
            <Card.Img  variant="top" src={movie.posterURL} alt={`${movie.title} poster`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-secondary">Rating: {movie.rating}</span>
                   <br></br>
                   <Link to={`/trailer/${movie.id}`}><Button variant="primary">Watch Trailer</Button>
                   </Link> 
                </div>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
