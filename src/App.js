import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

//Component imports
import apiKey from './config';
import PhotoContainer from './components/PhotoContainer';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      sunsets: [],
      waterfalls: [],
      rainbows: [],
      loading: true
    };
  }
  //main search with default of sunsets
  performSearch = (query = 'sunsets') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  componentDidMount() {
    this.performSearch();

    //sunset axios
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( prevState => ({
          ...prevState,
          sunsets: response.data.photos.photo,
          loading: false
        }));
             })
             .catch(error => {
              console.log('Error fetching and parsing data', error);
            });

      //waterfalls axios
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=waterfalls&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( prevState => ({
          ...prevState,
          waterfalls: response.data.photos.photo,
          loading: false
        }));
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });

      //rainbows axios
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=rainbows&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( prevState => ({
          ...prevState,
          rainbows: response.data.photos.photo,
          loading: false
        }));
             })
             .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
  }

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div>
          <div className="main-header">
            <h1 className="main-title">React Gallery App</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
          <Nav />
          <Switch>
            <Route exact path='/' render={ () =>
                (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.photos} />
              }   />
            <Route exact path='/search/:query' render={ () =>
                (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.photos} />
              }    />
            <Route exact path='/sunsets' render={ () =>
              (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.sunsets} />
            } />
            <Route exact path='/waterfalls' render={ () =>
              (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.waterfalls} />
            } />
            <Route exact path='/rainbows' render={ () =>
              (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.rainbows} />
            } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
