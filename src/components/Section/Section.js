import s from './Section.module.css';

function Section({title, children}) {
    return (<div className={s.Section}>
        {title.trim() && <h2 className={s.title}>{title}</h2>}
        {children}</div>);
}

export default Section;