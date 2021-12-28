import './Genres.css';
import { Link } from 'react-router-dom';
import MovieCards from './MovieCards';

const genreObj = [
    {
        id: 0,
        genre: 'Popular',
        url: 'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 1,
        genre: 'Action',
        url: 'https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 2,
        genre: 'Drama',
        url: 'https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 3,
        genre: 'Crime',
        url: 'https://api.themoviedb.org/3/discover/movie?with_genres=80&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 4,
        genre: 'Children',
        url: 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 5,
        genre: 'Romance',
        url: 'https://api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 6,
        genre: 'Thriller',
        url: 'https://api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
];

export default function Genres() {
    return genreObj.map((section) => (
        <div className='genres' key={section.genre}>
            <div className='genre-titles'>
                <Link to={`/genre/${section.id}`}>
                    {section.genre}
                    <div className='explore'>
                        Explore <i className='fas fa-chevron-right'></i>
                    </div>
                </Link>
            </div>
            <div className='posters'>
                <MovieCards url={section.url} />
            </div>
        </div>
    ));
}
