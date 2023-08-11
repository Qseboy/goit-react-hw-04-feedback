import {
  FeedbacOptionsButton,
  FeedbacOptionsLi,
  FeedbacOptionsUl,
} from './feedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  const keys = Object.keys(options);
  return (
    <>
      <FeedbacOptionsUl>
        {keys.map(el => (
          <FeedbacOptionsLi key={el}>
            <FeedbacOptionsButton
              type="button"
              onClick={() => {
                onLeaveFeedback(el);
              }}
            >
              {el}
            </FeedbacOptionsButton>
          </FeedbacOptionsLi>
        ))}
      </FeedbacOptionsUl>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
