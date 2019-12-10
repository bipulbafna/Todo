import React, { PureComponent } from 'react'

export default class AddTodo extends PureComponent {
    render() {
        const { inputValue, handleAddTodo, handleInputValue, emptyInput } = this.props;
        console.log('clicked')
        return (
            <div>
                <input type="text" value={inputValue} onChange={handleInputValue} className="styledInput" />
                <button onClick={handleAddTodo} className="styledButton">Add</button>
                {emptyInput && <p className="errorField">Input field is empty!</p>}
            </div>
        )
    }
}
