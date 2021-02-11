import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props){
        super(props);

       this.state = {
           pokemonList: this.props.pokemons,
           poke: 0,
       }
    }

    nextPoke() {
      this.state.poke+1 < this.state.pokemonList.length ?
        this.setState((estadoAnterior, _props) => ({
            poke: estadoAnterior.poke +1,
        })) :
        this.setState({
            poke: 0,
        })
    }

    pokeType({target}) {
        const type = target.innerHTML;
        const searchType = this.props.pokemons.filter((value) => value.type === type);

        this.setState({
            pokemonList: searchType,
            poke: 0,
        })
    }

    pokeAll() {
        this.setState({
            pokemonList: this.props.pokemons
        });
    }

    render() {
        const pokemons = this.state.pokemonList;
        return (
            <div>
                <section className="pokedex">
                    {pokemons.filter((_poke, index) => index === this.state.poke).map((poke) => <Pokemon key={poke.id} pokemon={poke}/>)}
                </section>
                <section>
                    <button onClick={ this.nextPoke.bind(this) }>Proximo Pokemon</button>
                    <button onClick={ this.pokeType.bind(this) }>Fire</button>
                    <button onClick={ this.pokeType.bind(this) }>Psychic</button>
                    <button onClick={ this.pokeAll.bind(this) }>ALL</button>
                </section>
            </div>
        );
    }
}

export default Pokedex;