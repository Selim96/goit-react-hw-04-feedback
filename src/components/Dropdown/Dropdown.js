import React, { Component } from "react";
import s from './Dropdown.module.css';

class Dropdown extends Component {
    state = {
        visible: false,
    }

    toggle = () => {
        this.setState(p => ({
            visible: !p.visible,
        }))
    }

    render() {
        return (
            <div className={s.Dropdown}>
                <div className={s.DropdownBox}>
                    <button type="button" onClick={this.toggle}>
                    {this.state.visible ? 'скрыть' : 'открыть'}
                    </button>
                    
                </div>
                {this.state.visible && <div className={s.menu}>Выпадающее меню</div>}
            </div>
        )
    }
}

export default Dropdown;