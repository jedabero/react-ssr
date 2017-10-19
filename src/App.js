import React from 'react';
import { connect } from 'react-redux';

import { get as getItems } from './items';

class App extends React.Component{
  
  state = {
    items: []
  }

  async componentDidMount () {
    this.props.getItems();
  }

  render () {
    const { items } = this.props;
    return (
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);