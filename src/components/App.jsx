import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import { Messadge } from './Messadge/Messadge';
import Statistics from './Statistics/Statistics';


export class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackStateChange = evt => {
    const { name } = evt.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percent = (this.state.good / this.countTotalFeedback()) * 100;
    return Number.isNaN(percent) ? 0 : Math.round(percent);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Messadge title="Please leave your feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onFeedbackStateChange}
          />
        </Messadge>
        <Messadge title="Statistics">
          <Statistics
            message="There is no feedback"
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        </Messadge>
      </>
    );
  }
}

export default App;