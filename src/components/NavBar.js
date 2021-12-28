import React from 'react';
import './NavBar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const SEARCH_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=9c9a236c211df46e640b24f29796b6c0&query=';

export default function NavBar() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // e.preventDefault();
        navigate(`/search/${term}`);
    };
    return (
        <div className='navbar'>
            <nav className='nav container'>
                <div className='nav-1'>
                    <NavLink to={'/'} className='logo'>
                        MOVIE<span>Flix</span>
                    </NavLink>
                    <div className='nav-links'>
                        <NavLink to={'/'} className='nav-link'>
                            Home
                        </NavLink>
                        <NavLink to={'/genre/0'} className='nav-link'>
                            Trending
                        </NavLink>
                        <NavLink to={'/genre/1'} className='nav-link'>
                            Action
                        </NavLink>
                        <NavLink to={'/genre/5'} className='nav-link'>
                            Romance
                        </NavLink>
                        {/* <NavLink to={'/genre/2'} className='nav-link'>
                            Drama
                        </NavLink> */}
                        <NavLink to={'/genre/4'} className='nav-link'>
                            Children
                        </NavLink>
                    </div>
                </div>
                <div className='form-search'>
                    <form id='form-home' onSubmit={handleSubmit}>
                        <input
                            id='search'
                            type='text'
                            placeholder='Search '
                            onChange={(e) => setTerm(e.target.value)}
                            required
                        />
                    </form>
                    <p>
                        <i className='fas fa-search'></i>
                    </p>
                </div>
            </nav>
        </div>
    );
}
