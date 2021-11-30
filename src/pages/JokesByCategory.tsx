import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetJokesByCategoriesQuery, useGetJokesCategoriesQuery } from '../services/jokesServices';

const JokesByCategory = () => {
  const { category } = useParams<'category'>();
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetJokesByCategoriesQuery(category);
  useEffect(() => {
    if (isError || data?.error) {
      navigate('../404');
    }
  }, [data]);

  return (
    <div className="container">
      {isLoading && <h1>Loading...</h1>}
      {data && !data.error && data.jokes.map((joke) => (
        <span key={joke.id} className="container__joke">
          <Link className="link__joke" to={`./${joke.id}`}>{joke.joke}</Link>
        </span>
      ))}
    </div>
  );
};

export default JokesByCategory;
