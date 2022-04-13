import s from './FeedbackOptions.module.css';

function FeedbackOptions({options, onLeaveFeedback,}) {
    return (
        <ul className={s.list}>
            {options.map( option => (
                <li key={option} className={s.item}>
                    <button type='button' className='button' onClick={() => onLeaveFeedback(option)}>{option}</button>
                </li>)
        )}
        </ul>
    );
}

export default FeedbackOptions;