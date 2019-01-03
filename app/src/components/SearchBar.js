import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  handleChange = e => {
    this.setState({ term: e.target.value });
    console.log();
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.handleSubmit} className="ui form" action="">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
