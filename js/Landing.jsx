// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { setSearchTerm } from './actionCreators';

class Landing extends React.Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory,
    clearSearchTerm: Function
  };

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            type="text"
            placeholder="Search"
            value={this.props.searchTerm}
          />
        </form>
        <Link to="/search" onClick={this.props.clearSearchTerm}>
          or Browse All
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  clearSearchTerm() {
    dispatch(setSearchTerm(''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
