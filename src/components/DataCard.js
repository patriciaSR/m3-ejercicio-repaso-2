import React from 'react';
import PropTypes from 'prop-types';

class DataCard extends React.Component {
  render() {
    const {
      name,
      email,
      passwords,
      bank
    } = this.props.userData


    return (
      <li className="list__user">
        <h2 className="user__name">{name}</h2>
        <p className="user__email">{email}</p>
        <ul className="user__pass">
          {passwords.map((pass, index) => <li key={index} className={`user__pass-${index}`}>{pass}</li>)}
        </ul>
        <p className="user__iban">{bank.iban}</p>
        <p className="user__pin">{bank.pin}</p>
      </li>
    )
  }
}

DataCard.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    passwords: PropTypes.arrayOf(PropTypes.string),
    bank: PropTypes.objectOf(PropTypes.string)
  })
}

export default DataCard;