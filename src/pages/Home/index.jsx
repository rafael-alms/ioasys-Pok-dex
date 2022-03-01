import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import * as S from './Home.style'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import coracao from '../../assets/icons/coracao.svg'

const Home = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(pokemonData);

  return (
    <>
      <S.Container>
        <Header mode="dark" />
        {/*<Link to="/home">Home sem reload</Link>*/}
        <form onSubmit={handleSubmit}>
          <label>
            Buscar
            <input type="text" onChange={handleChange} />
          </label>
        </form>
        <div className="favoritos">
          <img src={coracao} />
          <span>Meus favoritos</span>
        </div>
        {pokemonData.map((data) => {
          return (
            <div className="card">
              <div className="id">#{data.id}</div>
              <img src={data.sprites["front_default"]} />
              <div className="name">
                <span>{data.name}</span>
              </div>

              {/*<div>{pokemonType}</div>
              <div>Height</div>
              <div>
                {" "}
                {Math.round(data.height / 10)} m
              </div>
              <div>Weight</div>
              <div>
                {" "}
                {Math.round(data.weight / 10)} kg
              </div>*/}
            </div>
          );
        })}
      </S.Container>
    </>
  );
}

export default Home;