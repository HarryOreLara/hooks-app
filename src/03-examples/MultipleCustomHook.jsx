import React from 'react'
import useFetch from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import LoadingMessage from './LoadingMessage';
import PokemonCard from './PokemonCard';

const MultipleCustomHook = () => {

  const { counter, decrement, increment } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);



  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />

      {isLoading
        ? <LoadingMessage />
        : (<PokemonCard 
        id={counter} 
        name={data.name} 
        sprites={[
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny
        ]}
        />)
      }

      <button
        className='btn btn-primary mt-3'
        onClick={() => counter > 1 ? decrement() : null}
      >Anterior</button>
      <button
        className='btn btn-secondary mt-3'
        onClick={() => increment(1)}
      >Siguiente</button>
    </>
  )
}

export default MultipleCustomHook
