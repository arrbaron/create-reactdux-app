import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount } from './actions/action';
import logo from './logo.svg';
import redux from './redux.svg';
import './App.css';

class App extends Component {
  increaseCount() {
    this.props.dispatch(incrementCount());
  }
  
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <img src={redux} className='App-logo' alt='logo' />
          <h1 className='App-title'>{this.props.title}</h1>
        </header>
        <p className='App-intro'>{this.props.intro}</p>
        <button onClick={() => this.increaseCount()}>Dispatch an action to increment the count</button>
        <p>Count: {this.props.count}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.reducer.title,
  intro: state.reducer.intro,
  count: state.reducer.count
});

export default connect(mapStateToProps)(App);
