import { useState } from 'react';
import { Feedback } from './Feedback/Feedback.jsx';
import { Notification } from './Notification/Notification.jsx';
import { Section } from './Section/Section.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

const feedbackNames = ['good', 'neutral', 'bad'];

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={feedbackNames} onLeaveFeedback={handleFeedback} />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
};

export default App;
