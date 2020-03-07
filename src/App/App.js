import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";

// Store
import store from './store';

// Components
import  AppMenu from './Components/menu/Menu';
import Reproductor from './Components/Reproductor'
import Albums from './Components/album/Albums'

// Css
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount(dispatch) {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  albumDestacados = (albums) => {
    return albums.slice(0, 3);
  };

  render() {

    return (
    <Provider store={store}>
      <Router>

        <div className="App">
          <h1 className="title">Reactify</h1>
          <span className="blinker">Premium</span>
          <AppMenu />
          <h2>Albums destacados</h2>
            { 
            this.state.loading ?
              <p>Cargando...</p>
              : 
              <Albums list={this.albumDestacados(this.state.albums)} />
            }
        </div>
        <div className="App">
          <Reproductor />
        </div>

      </Router>
    </Provider>
    );
  }
}

export default App;
