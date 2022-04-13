import Counter from './FOLDER/Exempal';
import Dropdown from './Dropdown/Dropdown';
// =============================================
import React, { Component } from 'react';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  handlGoodClick = () => {
    this.setState(prev => ({
      good: prev.good + 1,
    }));
  }
  handlNeutralClick = () => {
    this.setState(prev => ({
      neutral: prev.neutral + 1,
    }));
  }
  handlBadClick = () => {
    this.setState(prev => ({
      bad: prev.bad + 1,
    }));
  }

  countTotalFeedback() {
    const { good, neutral, bad, } = this.state;
    return (good + neutral + bad);
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad, } = this.state;
    return good ? Math.round(good * 100 / (good + neutral + bad)) : 0;
  }

  render() {
    const {good, neutral, bad,} = this.state;

    return (
      <div className=''>
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
      <div>
          <p className='proposal'>Please leave feedback</p>
          <div className='buttonBoard'>
            <button type='button' className='button' onClick={this.handlGoodClick}>Goood</button>
            <button type='button' className='button' onClick={this.handlNeutralClick}>Neutral</button>
            <button type='button' className='button' onClick={this.handlBadClick}>Bad</button>
          </div>
        
        <div className='statistics'>
          <h2 className='title'>Statistics</h2>
          
        </div>
      </div>
    </div>
    )
    
  };
};

export default App;