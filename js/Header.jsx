// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: { showSearch?: boolean, handleSearchTermChange?: Function, searchTerm?: string }) => {
  const utilSpace = (
    <input
      onChange={props.handleSearchTermChange}
      value={props.searchTerm}
      type="text"
      placeholder="Search"
    />
  );

  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {props.showSearch ? utilSpace :  <h2><Link to="/search">Back</Link></h2> }
    </header> 
  );
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop(){},
  searchTerm: ''
};

export default Header;
