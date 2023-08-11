import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButton = option => {
    const updateFeedback = {
      good: () => setGood(prev => prev + 1),
      neutral: () => setNeutral(prev => prev + 1),
      bad: () => setBad(prev => prev + 1),
    };

    if (updateFeedback[option]) {
      updateFeedback[option]();
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = Math.round(100 - ((bad + neutral) * 100) / total);
    return result;
  };

  const total = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleButton}
          options={{ good, neutral, bad }}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={percent ? percent : 0}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
