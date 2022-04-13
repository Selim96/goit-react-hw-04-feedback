import s from './Statistics.module.css';

function Statistics({good, neutral, bad, total, positivePercentage, }) {
    return (
        <ul className='statisticsList'>
            <li className='statisticsItem'>
                <p className='statisticsText'>Good:{ good }</p>
            </li>
            <li className='statisticsItem'>
                <p className='statisticsText'>Neutral:{ neutral }</p>
            </li>
            <li className='statisticsItem'>
                <p className='statisticsText'>Bad:{ bad }</p>
            </li>
            <li className='statisticsItem'>
              <p className='statisticsText'>Total:{total }</p>
            </li>
            <li className='statisticsItem'>
              <p className='statisticsText'>Positive feedback:{` ${positivePercentage}% `}</p>
            </li>
          </ul>
    );
}

export default Statistics;