import s from './Statistics.module.css';
import PropTypes from "prop-types";


function Statistics({ good, neutral, bad, total, positivePercentage,}) {
  
    return (
    <ul className={s.statisticsList}>
      <li className={s.statisticsItem}>
          <p className={s.statisticsText}>Good: <span className={s.value}>{ good }</span></p>
      </li>
      <li className={s.statisticsItem}>
          <p className={s.statisticsText}>Neutral: <span className={s.value}>{ neutral }</span></p>
      </li>
      <li className={s.statisticsItem}>
          <p className={s.statisticsText}>Bad: <span className={s.value}>{ bad }</span></p>
      </li>
      <li className={s.statisticsItem}>
        <p className={s.statisticsText}>Total: <span className={s.value}>{ total }</span></p>
      </li>
      <li className={s.statisticsItem}>
        <p className={s.statisticsText}>Positive feedback: <span className={s.value}>{`${positivePercentage}%`}</span></p>
      </li>
    </ul>
    );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}