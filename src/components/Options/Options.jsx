import s from './Options.module.css';
const Options = ({ options, handleClick, showReset }) => {
  return (
    <div>
      <div className={s.options}>
        {options.map(option => {
          if (option === 'reset' && !showReset) {
            return null;
          }
          return (
            <button key={option} onClick={() => handleClick(option)}>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Options;
