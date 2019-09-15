import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="emailFilter" className="emailFilter">Filtra por email</label>
        <input type="text" name="emailFilter" id="emailFilter" value={this.props.filters} onChange={this.props.updateState}/>
      </>
    )
  }
}

export default Filters;