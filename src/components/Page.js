import React from 'react';
import Header from './Header';
import DataList from './DataList';
import Footer from './Footer';
import PropTypes from 'prop-types';
import Filters from './Filters';
import Status from './Status';

class Page extends React.Component {
  render() {
    const { emailFilter, userData } = this.props.userData;
    const filteredData = userData.filter(user => !emailFilter || user.email.includes(emailFilter));

    return (
      <>
        <Header />
        <Filters 
          filters={this.props.userData.emailFilter}
          updateState={this.props.updateState}
        />
        <Status status={filteredData.length} total={userData.length} />
        <DataList userData={filteredData} />
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