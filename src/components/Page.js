import React from 'react';
import Header from './Header';
import DataList from './DataList';
import Footer from './Footer';
import PropTypes from 'prop-types';
import Filters from './Filters';

class Page extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Filters 
          filters={this.props.userData.emailFilter}
          updateState={this.props.updateState}
        />
        <DataList userData={this.props.userData} />
        <Footer />
      </>
    )
  }
}

Page.propTypes = {
  userData: PropTypes.object,
  emailFilter: PropTypes.string,
  updateState: PropTypes.func
}

export default Page;