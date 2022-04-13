import s from './FeedbackOptions.module.css';

function FeedbackOptions({options, onLeaveFeedback,}) {
    return (
        <ul className={s.list}>
            {options.map( option => (
                <li key={option[0]} className={s.item}>
                    <button type='button' className='button' onClick={onLeaveFeedback(option[0])}>{option[0]}</button>
                </li>)
        )}
        </ul>
    );
}

export default FeedbackOptions;