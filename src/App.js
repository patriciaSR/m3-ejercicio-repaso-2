import React from 'react';
import './App.css';
import { userData } from './userData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      userData : userData
    }
  }

  render() {
    
    return (
      <div className="App">
        <h1 className="page__title">Legion of hell</h1>
        <ul className="result__list">
          {this.state.userData.map((user, index) => (
            <li className="list__user" key={index}>
              <h2 className="user__name">{user.name}</h2>
              <p className="user__email">{user.email}</p>
              <ul className="user__pass">
                {user.passwords.map((pass, index) => <li key={index} className={`user__pass-${index}`}>{pass}</li>)}
              </ul>
              <p className="user__iban">{user.bank.iban}</p>
              <p className="user__pin">{user.bank.pin}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
