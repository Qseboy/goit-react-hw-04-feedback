import PropTypes from 'prop-types';
import { StatisticsUl, StatisticsLi } from './statistics.styled';

export default function Statistics({ good, neutral, bad, total, percent }) {
  return (
    <>
      <StatisticsUl>
        <StatisticsLi>Good: {good}</StatisticsLi>
        <StatisticsLi>Neutral: {neutral}</StatisticsLi>
        <StatisticsLi>Bad: {bad}</StatisticsLi>
        <StatisticsLi>Total: {total}</StatisticsLi>
        <StatisticsLi>Positive feedback: {percent}%</StatisticsLi>
      </StatisticsUl>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
