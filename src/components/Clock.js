import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  updateDate() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateDate(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const hours = this.state.date.getHours();
    const min = this.state.date.getMinutes();
    const sec = this.state.date.getSeconds();

    return (
      <p className="clock">{hours}:{min}:{sec}</p>
    )
  }
}


export default Clock;