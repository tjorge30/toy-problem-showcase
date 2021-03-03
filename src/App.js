import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';
import EvenAndOdd from './components/TopicBrowser/EvenAndOdd';
import FilterObject from './components/TopicBrowser/FilterObject';
import FilterStrings from './components/TopicBrowser/FilterString';
import Palidrome from './components/TopicBrowser/Palindrome';
import Sum from './components/TopicBrowser/Sum'

class App extends Component {
  render() {
    return(
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterStrings />
        <Palidrome />
        <Sum />
      </div>
    )
  }
}

export default App;
