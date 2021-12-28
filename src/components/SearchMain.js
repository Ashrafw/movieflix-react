import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchMain.css';
const SEARCH_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=9c9a236c211df46e640b24f29796b6c0&query=';

export default function SearchMain() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${term}`);
    };
    return (
        <div className='search-main'>
            <div className='bg-search'></div>
            <div className='selections'>
                <div className='selection-genre container'>
                    <h1>
                        Explore all types of Movie Genres with
                        <span className='logo'>
                            MOVIE<span>Flix</span>
                        </span>
                    </h1>
                    {/* <h3>Find Movies and more..</h3> */}
                    <form className='form-search-main' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='To Find Movies Enter keywords...'
                            id='search'
                            onChange={(e) => setTerm(e.target.value)}
                            required
                        />
                        <i className='fas fa-search'></i>
                    </form>
                </div>
            </div>
        </div>
    );
}
