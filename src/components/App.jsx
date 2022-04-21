import React, { Component, useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handlClick = (option) => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
    
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  }

  const countPositiveFeedbackPercentage = () => {
    return good ? Math.round(good * 100 / (good + neutral + bad)) : 0;
  }

  return <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={handlClick} />
      </Section>
      <Section title='Statistics'>
        {countTotalFeedback() === 0 ? <Notification message="There is no feedback"/> : <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>}
      </Section>
    </>
}

// ============================================
// class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
//   handlClick = (n) => {
//     this.setState(prev => ({
//       [n]: prev[n] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad, } = this.state;
//     return (good + neutral + bad);
//   }
//   countPositiveFeedbackPercentage() {
//     const { good, neutral, bad, } = this.state;
//     return good ? Math.round(good * 100 / (good + neutral + bad)) : 0;
//   }

//   render() {
//     const {good, neutral, bad,} = this.state;
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback();
    
//     return <>
//       <Section title='Please leave feedback'>
//         <FeedbackOptions options={options} onLeaveFeedback={this.handlClick} />
//       </Section>
//       <Section title='Statistics'>
//         {total === 0 ? <Notification message="There is no feedback"/> : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage()}/>}
//       </Section>
//     </>
//   };
// };

export default App;