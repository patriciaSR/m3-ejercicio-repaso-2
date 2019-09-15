import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import DataList from './DataList';
import Footer from './Footer';
import Filters from './Filters';
import Status from './Status';

class Page extends React.Component {
  render() {
    const {
      emailFilter,
      userData,
      date,
      updateState } = this.props;
    const filteredData = userData.filter((user) => !emailFilter || user.email.includes(emailFilter));

    return (
      <>
        <Header />
        <Filters
          filters={emailFilter}
          updateState={updateState}
        />
        <Status status={filteredData.length} total={userData.length} />
        <DataList userData={filteredData} />
        <Footer date={date} />
      </>
    );
  }
}

Page.propTypes = {
  userData: PropTypes.object,
  emailFilter: PropTypes.string,
  date: PropTypes.string,
  updateState: PropTypes.func
}

export default Page;
