/* function-based Component */

// import React from 'react';

// const SearchBar = () => {
//   return <input />;
// };

/* class-based Component */

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
