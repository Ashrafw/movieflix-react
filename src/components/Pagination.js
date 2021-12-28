import React, { useState } from 'react';
import '../pages/genre-page/GenrePage.css';

export default function Pagination({ totalPageNumber, setPageNumber, pageNumber }) {
    const getButtonsUsingForLoop = (num) => {
        const array = [];

        for (var i = 1; i <= num; i++) {
            array.push(
                <button onClick={() => setPageNumber(i)} className={pageNumber === i ? 'active-page' : ''}>
                    {i}
                </button>
            );
        }

        return array;
    };

    console.log('from pagination component', totalPageNumber);

    return <div className='pagination'>{getButtonsUsingForLoop(totalPageNumber)}</div>;
}
