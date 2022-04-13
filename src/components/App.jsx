import Counter from './FOLDER/Exempal';
import Dropdown from './Dropdown/Dropdown';
// =============================================
import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  handlClick = (n) => {
    this.setState(prev => ({
      [n]: prev[n] + 1,
    }));
  };

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
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    
    return (
      <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={this.handlClick} />
      </Section>
        <Section title='Statistics'>
          {total === 0 ? <Notification message="There is no feedback"/> : <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>}
      </Section>
    </div>
    )
    
  };
};

export default App;