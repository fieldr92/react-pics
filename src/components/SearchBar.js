import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => { // arrow function used to BIND 'this' to SearchBar
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  // onFormSubmit(e) { // arrow function now used in onSubmit to bind 'this' to class
  //   e.preventDefault();
  //   console.log(this.state.term);
  // }
  
  render() {
    return (
      <div className="ui segment">
        {/* <form onSubmit={e => this.onFormSubmit(e)} className="ui form"> // can be used with normal method as will BIND 'this' with arrow function */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;