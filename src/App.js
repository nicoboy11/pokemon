import React, { Component } from 'react';
import Card from './components/Card';

import { connect } from 'react-redux';
import * as actions from './redux/actions/pokemonActions';
import './index.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      pokemonList: [],
      pokemon: {}
    }
  }

  componentDidMount(){
    this.props.fetching('FETCHINGALL','https://pokeapi.co/api/v2/pokemon/');
  }

  selectedPokemon(url){
    this.props.fetching('FETCHINGONE',url);
  }

  renderDetails(){
    const { sprites, name, abilities } = this.props.pokemon;
    if(this.props.loadingOne){
      return <div>Loading Pokemon info...</div>
    }

    if(name===undefined){
      return null;
    }

    return (
      <div style={styles.detailStyle}>
        <div><img src={sprites.front_default} /></div>
        <h3>{name}</h3>
        <div>Habilities: <br /><ul>{(abilities.length > 0)?abilities.map(ab => { return <li>{ab.ability.name}</li>}):'N/A'}</ul></div>
      </div>
    )
  }

  renderCards(){
    return this.props.pokemonList.map(pk => {
      return <Card onClick={this.selectedPokemon.bind(this)} key={pk.name} name={pk.name} url={pk.url} />
    })
  }

  render() {
    if(this.props.loadingAll){
      return <div>Loading...</div>
    }
    return (
      <div style={styles.wrapper}>
        <div style={styles.listWrapperStyle}>
          {this.renderCards()}
        </div>
        <div style={styles.detailWrapperStyle}>
          {this.renderDetails()}
        </div>
      </div>
    );
  }
}

const styles= {
  wrapper: {
    display: 'flex',
    flex: 1
  },
  listWrapperStyle: {
    display: 'flex',
    flex: 3,
    flexWrap: 'wrap',
    height: '100vh'
  },
  detailWrapperStyle: {
    display: 'flex',
    flex: 1
  },
  detailStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const mapStateToProps = state => {
  return {
    pokemonList: state.pokemon.list,
    pokemon: state.pokemon.selected,
    loadingOne: state.pokemon.loadingOne,
    loadingAll: state.pokemon.loadingAll
  }
};

export default connect(mapStateToProps, actions)(App);
