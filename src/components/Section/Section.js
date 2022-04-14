import s from './Section.module.css';
import PropTypes from "prop-types";

function Section({title, children}) {
    return (
    <div className={s.Section}>
        {title.trim() && <h2 className={s.title}>{title}</h2>}
        {children}
    </div>);
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
    
}