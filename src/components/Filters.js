import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const {
      filters,
      updateState
    } = this.props;

    return (
      <>
        <label htmlFor="emailFilter" className="emailFilter">Filtra por email</label>
        <input type="text" name="emailFilter" id="emailFilter" value={filters} onChange={updateState} />
      </>
    )
  }
}

Filters.propTypes = {
  filters: PropTypes.string,
  updateState: PropTypes.func
};

export default Filters;
