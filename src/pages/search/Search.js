import { useState, useEffect } from 'react';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import OverlayMovie from '../../components/OverlayMovie';
import '../genre-page/GenrePage.css';
import Pagination from '../../components/Pagination';

const SEARCH_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=9c9a236c211df46e640b24f29796b6c0&query=';

export default function Search() {
    console.log('searchid');
    const { searchid } = useParams();

    const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
    // const [pageNumber, setPageNumber] = useState(1);

    const [selectedGenreUrl, setSelectedGenreUrl] = useState(SEARCH_URL + searchid);
    const [title, setTitle] = useState('');
    const [posterPath, setPosterPath] = useState('');
    const [backdropPath, setBackdropPath] = useState('');
    const [rate, setRate] = useState('');
    const [date, setDate] = useState('');
    const [overview, setOverview] = useState('');
    const [clickedValue, setClickedValue] = useState(false);
    const [clickedId, setClickedId] = useState('');
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    // const [totalPageNumberUrl, setTotalPageNumberUrl] = useState(1);
    // const [totalPageNumber, setTotalPageNumber] = useState(1);
    // const [steps, setSteps] = useState([]);
    const { data, isPending, error } = useFetch(selectedGenreUrl);
    // console.log(selectedGenreUrl);
    useEffect(() => {
        // setSelectedGenreUrl(list.url + '&page=' + pageNumber);

        if (data) {
            // setSelectedGenreUrl(SEARCH_URL + searchid + '&page=' + pageNumber);
            setTitle(data.results[count].title);
            setPosterPath(IMG_URL + data.results[count].poster_path);
            setBackdropPath(IMG_URL + data.results[count].backdrop_path);
            setRate(data.results[count].vote_average);
            setDate(data.results[count].release_date);
            setOverview(data.results[count].overview);
            // setTotalPageNumberUrl(data.total_pages);
        }
        if (error) {
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
        // if (totalPageNumberUrl > 8) {
        //     setTotalPageNumber(8);
        // } else {
        //     setTotalPageNumber(totalPageNumberUrl);
        // }
        // setSteps([]);
        // for (let i = 1; i <= totalPageNumber; i++) {
        //     steps.push(i);
        // }
        // console.log(steps, totalPageNumber, totalPageNumberUrl);
    }, [searchid, data, error, count, navigate]);

    return (
        <div className='genre-page'>
            <div className='genre-page-info searchId'>
                <h1>
                    Search result for: <span>{searchid}</span>
                </h1>
            </div>
            {/* {totalPageNumber > 1 && (
                <Pagination
                    totalPageNumber={totalPageNumber}
                    setPageNumber={setPageNumber}
                    pageNumber={pageNumber}
                />
            )} */}
            {/* 
            <h2>{totalPageNumberUrl}</h2>
            <h2>{totalPageNumber}</h2> */}
            <div className='genre-section'>
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {data &&
                    data.results.map((movie) => (
                        <div key={movie.title} className='movie'>
                            <OverlayMovie
                                title={movie.title}
                                date={movie.release_date}
                                overview={movie.overview}
                                clickedValue={clickedValue}
                                setClickedValue={setClickedValue}
                                info={clickedId === movie.title ? true : false}
                            />
                            <img
                                src={IMG_URL + movie.poster_path}
                                alt=''
                                srcSet=''
                                onClick={(e) => {
                                    if (!clickedValue) {
                                        setClickedValue(true);
                                        setClickedId(movie.title);
                                    } else {
                                        setClickedId('');
                                        setClickedValue(false);
                                    }
                                }}
                            />

                            <div className='movie-info'>
                                <h5>{movie.title}</h5>
                                <div className='movie-info-sec'>
                                    <p>{movie.release_date}</p>
                                    <span>{movie.vote_average}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
