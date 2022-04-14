import s from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

function FeedbackOptions({options, onLeaveFeedback,}) {
    return (
        <ul className={s.list}>
            {options.map( option => (
                <li key={option} className={s.item}>
                    <button type='button' className={s.button} onClick={() => onLeaveFeedback(option)}>{option}</button>
                </li>)
            )}
        </ul>
    );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}