import React, { Component } from 'react';
import { Button } from 'shineout';
import store from '../store';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  clickHandle() {
    store.dispatch({ type: 'click', id: 12, text: 'wuhu' });
  }

  render() {
    console.log('this.props.data ==>', this.props.data);
    return (
      <div>
        {this.props.data.text}
        <Button type="primary" onClick={this.clickHandle}>点击</Button>
      </div>
    );
  }
}

export default Header;
