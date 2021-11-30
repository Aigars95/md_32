import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetJokeByIDQuery } from '../services/jokesServices';

const Joke = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  const { data } = useGetJokeByIDQuery(id);
  useEffect(() => {
    if (data && data.error) {
      navigate('../404');
    }
  }, [data]);
  return (
    <div className="container">
      {data && <h1>{data.joke}</h1>}
    </div>
  );
};

export default Joke;
