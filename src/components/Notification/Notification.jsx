import { NotificationDiv } from './notification.styled';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return (
    <>
      <NotificationDiv>{message}</NotificationDiv>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
