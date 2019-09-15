import React from 'react';
import './App.css';
import { userData } from './userData';
import Page from './components/Page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: this.getIdArray(),
      emailFilter: '',
    };

    this.updateState = this.updateState.bind(this);
  }

  getIdArray() {
    return (
      userData.map((user, index) => ({
        ...user,
        "id": index + 1
      }))
    );
  };

  updateState(event){
    const name = event.currentTarget.name;
    const newValue = event.currentTarget.value;
    this.setState({
      [name]:  newValue
    })
  }

  render() {

    return (
      <div className="App">
        <Page
          userData={this.state}
          updateState={this.updateState}
        />
      </div>
    );
  }
}

export default App;
