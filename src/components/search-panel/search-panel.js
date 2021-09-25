import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term:''
  };

  onSearchChenge = (e) => {
    const term = e.target.value;
    this.setState({ term })
    this.props.onSearchChenge(term);
  }

  render() {
    return (
      <input
        value={this.state.term}
        onChange={this.onSearchChenge}
        type="text"
        className="form-control search-input"
        placeholder="type to search" />
    );
  }
};


