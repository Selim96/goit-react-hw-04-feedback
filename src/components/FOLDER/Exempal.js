import React, { Component } from "react";

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
    state = {
        value: 5,
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
                <div className="Counter__controls">
                    <button type="button" onClick={this.handleIncrement}>увеличить на 1</button>
                    <button type="button" onClick={this.handleDecrement}>уменьшить на 1</button>
                </div>        
            </div>
        )
    }
}
export default Counter;