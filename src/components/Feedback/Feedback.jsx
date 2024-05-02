import s from './Feedback.module.css';
const Feedback = ({ state, total, positiveFeedback }) => {
  return (
    <div className={s.feedback}>
      <p>Good {state.good}</p>
      <p>Neutral {state.neutral}</p>
      <p>Bad {state.bad}</p>
      <p>Total {total}</p>

      <p>
        Positive:
        {positiveFeedback}%
      </p>
    </div>
  );
};

export default Feedback;
