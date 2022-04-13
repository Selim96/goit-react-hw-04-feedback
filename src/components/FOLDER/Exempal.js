import React, { Component } from "react";
import Controls from './Controls';
import PropTypes from 'prop-types';

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button">Increment by {step}</button>
//         <button type="button">Decrement by {step}</button>
//       </div>
//     );
//   }
// }

class Counter extends Component{
    static defaultProps = {
        initialValue: 0,
    }
    static propTypes = {

    }

    state = {
        value: this.props.initialValue,
        a: 3,
    }
    handleIncrement = () => {
        this.setState(p => ({
            value: p.value + 1,
        }));
    };
    handleDecrement = () => {
        this.setState(p => ({
            value: p.value - 1,
        }));
    };
    
    render() {
        return (
            <div className="Counter">
                <span className="Counter__value">{this.state.value}</span>
                <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
            </div>
        )
    }
}
export default Counter;