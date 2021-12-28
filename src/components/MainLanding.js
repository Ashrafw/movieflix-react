import { useState, useEffect } from 'react';
import './MainLanding.css';

import { useFetch } from '../hooks/useFetch';

export default function MainLanding() {
    const { data, isPending, error } = useFetch(
        'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1'
    );
    const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

    const [title, setTitle] = useState('');
    const [posterPath, setPosterPath] = useState('');
    const [backdropPath, setBackdropPath] = useState('');
    const [rate, setRate] = useState('');
    const [date, setDate] = useState('');
    const [overview, setOverview] = useState('');
    const [second, setSecond] = useState(0);
    // const [count, setCount] = useState(Math.floor(Math.random() * (19 - 0 + 1)) + 0);
    const [count, setCount] = useState(0);
    const [ii, setIi] = useState(0);
    // let i = 0;
    // setIdValue(data[0]);

    useEffect(() => {
        if (data) {
            setTitle(data.results[count].title);
            setPosterPath(IMG_URL + data.results[count].poster_path);
            setBackdropPath(IMG_URL + data.results[count].backdrop_path);
            setRate(data.results[count].vote_average);
            setDate(data.results[count].release_date);
            setOverview(data.results[count].overview);
        }
        const interval = setInterval(() => {
            setSecond(second + 1);
            // console.log(second, ii);
            if (ii < 6) {
                setCount(ii);
                setIi(ii + 1);
            } else {
                setIi(0);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [data, count, second]);

    // console.log(data);

    return (
        <div className='movie-landing'>
            {error && <h1>{error}</h1>}
            {isPending && <h1>Loading...</h1>}
            {data && (
                <div
                    className='content-landing'
                    id='landing'
                    style={{ backgroundImage: `url(" ${backdropPath}")` }}
                >
                    <div className='contain'>
                        <div className='details'>
                            <div className='image' id='image'>
                                <img src={posterPath} alt='' srcSet='' />
                            </div>
                            <div className='info'>
                                <div className='info-movie'>
                                    <div className='title'>
                                        <h1 id='titleH1'>{title}</h1>
                                    </div>

                                    <h3>
                                        Rating: <span id='rating'>{rate}</span>
                                    </h3>

                                    <p className='overview' id='overview'>
                                        {overview}
                                    </p>
                                </div>
                                <div className='select-movie'>
                                    <i
                                        onClick={() => setCount(0)}
                                        className={count === 0 ? 'fas fa-circle selected' : 'fas fa-circle'}
                                    ></i>
                                    <i
                                        onClick={() => setCount(1)}
                                        className={count === 1 ? 'fas fa-circle selected' : 'fas fa-circle'}
                                    ></i>
                                    <i
                                        onClick={() => setCount(2)}
                                        className={count === 2 ? 'fas fa-circle selected' : 'fas fa-circle'}
                                    ></i>
                                    <i
                                        onClick={() => setCount(3)}
                                        className={count === 3 ? 'fas fa-circle selected' : 'fas fa-circle'}
                                    ></i>
                                    <i
                                        onClick={() => setCount(4)}
                                        className={count === 4 ? 'fas fa-circle selected' : 'fas fa-circle'}
                                    ></i>
                                    <i
                                        onClick={() => setCount(5)}
                                        className={count === 5 ? 'fas fa-circle selected' : 'fas fa-circle'}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
