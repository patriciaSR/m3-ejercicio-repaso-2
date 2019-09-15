import React from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

class DataList extends React.Component {
  render() {
    const {
      userData,
      emailFilter
    } = this.props.userData;

    return (
      <ul className="result__list">
        {userData
        .filter(user => !emailFilter || user.email.includes(emailFilter))
        .map((user, index) => (
          <DataCard userData={user} key={index} />
        ))}
      </ul>
    )
  }
}

DataList.propTypes = {
  userData: PropTypes.shape({
    userData: PropTypes.array,
    emailFilter: PropTypes.string
  })
}

export default DataList;