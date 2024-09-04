import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        onFilter(e.target.value, rating);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
        onFilter(title, e.target.value);
    };

    return (
        <div className="filter">
            <input 
                type="text" 
                placeholder="Search by title" 
                value={title}
                onChange={handleTitleChange} 
            />
            <input 
                type="number" 
                placeholder="Search by rating" 
                value={rating}
                onChange={handleRatingChange} 
            />
        </div>
    );
};

export default Filter;
