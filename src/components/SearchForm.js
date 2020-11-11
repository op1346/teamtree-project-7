import React, { Component } from 'react';
import { withRouter} from 'react-router';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  state = {
    searchText: ''
  }
  //static proptype
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  //submit add history and path
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    let path = `/search/${this.query.value}`;
    this.props.history.push(path);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search"
               onChange={this.onSearchChange}
               name="search"
               ref={(input) => this.query = input}
               placeholder="" />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">Search</i></button>
      </form>
    );
  }
}

export default withRouter(SearchForm);
