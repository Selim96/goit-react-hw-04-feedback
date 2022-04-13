import s from './item.module.css';

function Item(props) {
    const arr = Object.entries(props);
    return (
        <ul className={s.statisticsList}>
            {arr.map(a => (
                <li key={a[0]} className={s.statisticsItem}>
                    <p className={s.statisticsText}>{a[0]}: {a[1]}</p>
                </li>
            ))}
        </ul>
    );
}

export default Item;