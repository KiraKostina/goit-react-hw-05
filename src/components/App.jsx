import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import Navigation from '../components/Navigation/Navigation';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';


// import SearchBar from './SearchBar/SearchBar';
// import Loader from './Loader/Loader';
// import ErrorMessage from './ErrorMessage/ErrorMessage';

export default function App() {
  return (
    <div className={css.container}>
      <h1>Movie Search</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
