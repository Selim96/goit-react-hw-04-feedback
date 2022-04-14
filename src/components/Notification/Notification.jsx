import s from './Notification.module.css';
import PropTypes from "prop-types";

function Notification({ message }) {
    return (
        <p className={s.message}>{message}</p>
    );
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string,
}