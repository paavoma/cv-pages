import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import CvMain from './containers/CvMain/CvMain';



class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CvMain />
        </Layout>
      </div>
    );
  }
}

export default App;
