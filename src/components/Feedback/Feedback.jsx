import s from './Feedback.module.css';
const Feedback = ({ state }) => {
  return (
    <div className={s.feedback}>
      <p>Good {state.good}</p>
      <p>Neutral {state.neutral}</p>
      <p>Bad {state.bad}</p>
      {state.total !== 0 && <p>Total {state.total}</p>}
      {state.total !== 0 && (
        <p>
          Positive{' '}
          {(
            ((state.good + state.neutral) /
              (state.good + state.neutral + state.bad)) *
            100
          ).toFixed(0)}
          %
        </p>
      )}
    </div>
  );
};

export default Feedback;
