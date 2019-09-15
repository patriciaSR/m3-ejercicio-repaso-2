import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateDate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateDate() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return (
      <p className="clock">{hours}:{min}:{sec}</p>
    );
  }
}


export default Clock;
