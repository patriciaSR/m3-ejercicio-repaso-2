import React from 'react';

class Status extends React.Component{
  render(){
    return(
      <p className="status">Mostrando {this.props.status} registros de {this.props.total}.</p>
    )
  }
}

export default Status;