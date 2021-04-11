import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import Header from './jsx/header';

class TestComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

// export default TestComponent;
const mapStateToProps = (store) => store;
export default connect(mapStateToProps)(TestComponent);
