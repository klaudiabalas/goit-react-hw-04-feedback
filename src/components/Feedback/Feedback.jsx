import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={css.feedback_container}>
    {Object.keys(options).map(option => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        className={css.feedback_button}
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
