import React from 'react';
import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { useGetJokesCategoriesQuery } from './services/jokesServices';
import Home from './pages/Home';
import JokesByCategory from './pages/JokesByCategory';
import Joke from './pages/Joke';
import NotFound from './pages/NotFound';

const App = () => {
  const { data } = useGetJokesCategoriesQuery(undefined);
  return (
    <div className="App">
      <header className="header">
        <nav>
          {data?.categories.map((category, index) => (
            <div key={index.toString()} className="nav__item">
              <Link className="link__nav" to={`/joke/${category}`}>{category}</Link>
            </div>
          ))}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joke/:category" element={<JokesByCategory />} />
        <Route path="/joke/:category/:id" element={<Joke />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
};

export default App;
