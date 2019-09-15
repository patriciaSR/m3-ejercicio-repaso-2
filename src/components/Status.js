import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
  render() {
    const { status, total } = this.props;
    return (
      <p className="status">
        Mostrando {status} registros de {total}.
      </p>
    );
  }
}

Status.propTypes = {
  status: PropTypes.number,
  total: PropTypes.number
};

export default Status;
