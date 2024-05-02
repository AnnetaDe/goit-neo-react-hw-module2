import s from './Options.module.css';
const Options = ({ options, handleClick, showReset }) => {
  return (
    <div className={s.options}>
      {options.map(option => (
        <button
          key={option}
          className={s.option}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default Options;
