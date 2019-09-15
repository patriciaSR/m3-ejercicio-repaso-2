import React from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

class DataList extends React.Component {
  render() {
    const userData = this.props.userData;

    return (
      <ul className="result__list">
        {userData
        .map((user, index) => (
          <DataCard userData={user} key={index} />
        ))
        }
      </ul>
    )
  }
}

DataList.propTypes = {
  userData: PropTypes.array
}

export default DataList;