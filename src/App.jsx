import Description from './components/Description/Description';
import Options from './components/Options/Options';
import { useEffect, useState } from 'react';

import './App.css';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const options = ['good', 'neutral', 'bad', 'reset'];
  const stored = { good: 0, neutral: 0, bad: 0, total: 0 };
  let totalFeedback = 0;

  const [storage, setStorage] = useState(() => {
    const saved = localStorage.getItem('feedback');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return stored;
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(storage));
  }, [storage]);

  const countTotalFeedback = () => {
    totalFeedback = storage.good + storage.neutral + storage.bad;
    console.log(totalFeedback);
    return totalFeedback;
  };
  storage.total = countTotalFeedback();
  const [showReset, setShowReset] = useState(false);
  console.log(showReset);

  const [mess, setMess] = useState(() => {
    totalFeedback = storage.good + storage.neutral + storage.bad;
    if (totalFeedback === 0) {
      return 'No feedback given';
    }
    return '';
  });

  useEffect(() => {
    if (storage.good + storage.neutral + storage.bad === 0) {
      setMess('No feedback given');
    } else {
      setMess('');
    }
  }, [storage]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setShowReset(false);

      setStorage({ good: 0, neutral: 0, bad: 0, total: 0 });
    }
    setStorage(
      previous => ({ ...previous, [feedbackType]: previous[feedbackType] + 1 }),
      [storage]
    );
    setShowReset(true);
  };

  return (
    <div className="main_wrapper">
      <Description />
      <Options
        options={options}
        handleClick={updateFeedback}
        showReset={showReset}
      />
      <Feedback state={storage} />
      <Notification message={mess} />
    </div>
  );
};
export default App;
