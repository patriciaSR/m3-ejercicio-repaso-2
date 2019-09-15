import React from 'react';
import PropTypes from 'prop-types';
import DataCard from './DataCard';

class DataList extends React.Component {
  render() {
    const { userData } = this.props;

    return (
      <ul className="result__list">
        {userData
          .map((user, index) => (
            <DataCard userData={user} key={index} />
          ))}
      </ul>
    );
  }
}

DataList.propTypes = {
  userData: PropTypes.array
}

export default DataList;
