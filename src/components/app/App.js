import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigation from '../../navigation/navConfig';

class App extends Component {
  render() {
    return (
        <Provider store={this.props.store}>
          <AppNavigation />
        </Provider>
    )
  }
}

export default App