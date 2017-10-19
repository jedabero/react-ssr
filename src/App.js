import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Route } from 'react-router-dom';

import { get as getItems } from './items';

const First = () => <div>First</div>;
const Second = () => <div>Second</div>;
const Third = () => <div>Third</div>;

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
      <div>
        <NavLink to="/" activeClassName="a">Home</NavLink>
        <NavLink to="/first" activeClassName="a">First</NavLink>
        <NavLink to="/second" activeClassName="a">Second</NavLink>
        <NavLink to="/third" activeClassName="a">Third</NavLink>
        <Route exact path="/first" component={First} />
        <Route exact path="/second" component={Second} />
        <Route exact path="/third" component={Third} />
        <ul>
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItems())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));