import s from './Statistics.module.css';

function Statistics({good, neutral, bad, total, positivePercentage, }) {
    return (
        <ul className='statisticsList'>
            <li className='statisticsItem'>
                <p>Good:{ good }</p>
            </li>
            <li className='statisticsItem'>
                <p>Neutral:{ neutral }</p>
            </li>
            <li className='statisticsItem'>
                <p>Bad:{ bad }</p>
            </li>
            <li className='statisticsItem'>
              <p>Total:{total }</p>
            </li>
            <li className='statisticsItem'>
              <p>Positive feedback:{` ${positivePercentage}% `}</p>
            </li>
          </ul>
    );
}

export default Statistics;