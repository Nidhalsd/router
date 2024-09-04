import React, { useState } from 'react';

const AddFilm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && description && posterURL && rating) {
            const newMovie = {
                title,
                description,
                posterURL,
                rating: parseFloat(rating)
            };

            onAdd(newMovie);

            
            setTitle('');
            setDescription('');
            setPosterURL('');
            setRating('');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-film-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Poster URL"
                value={posterURL}
                onChange={(e) => setPosterURL(e.target.value)}
            />
            <input
                type="number"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="0"
                max="10"
                step="0.1"
            />
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddFilm;
