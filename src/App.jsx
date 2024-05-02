import Description from './components/Description/Description';
import Options from './components/Options/Options';
import { useEffect, useState } from 'react';

import './App.css';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const options = ['good', 'neutral', 'bad', 'reset'];

  const emptyStored = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [storage, setStorage] = useState(() => {
    const saved = localStorage.getItem('feedback');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return emptyStored;
  });

  const countTotalFeedback = () => {
    return storage.good + storage.neutral + storage.bad;
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(storage));
  }, [storage]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setStorage(emptyStored);
      return;
    }
    setStorage(previous => ({
      ...previous,
      [feedbackType]: previous[feedbackType] + 1,
    }));
  };
  const total = countTotalFeedback();
  const positiveFeedback = Math.round((storage.good / total) * 100);

  return (
    <div className="main_wrapper">
      <Description />
      <Options
        options={options}
        handleClick={updateFeedback}
        showReset={total > 0}
      />
      {total > 0 ? (
        <Feedback
          state={storage}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message={'No feedback'} />
      )}
    </div>
  );
};
export default App;
