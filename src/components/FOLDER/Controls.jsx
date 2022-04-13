function Controls({onIncrement, onDecrement}) {
    return (
        <div className="Counter__controls">
            <button type="button" onClick={onIncrement}>увеличить на 1</button>
            <button type="button" onClick={onDecrement}>уменьшить на 1</button>
        </div>
    )
}

export default Controls;