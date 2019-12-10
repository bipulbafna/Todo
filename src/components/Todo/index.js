import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
class Todo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { inputValue: "", emptyInput: false }
    }
    handleInputValue = (e) => {
        const inputValue = e.target.value;
        this.setState({ inputValue, emptyInput: false });
    }
    handleAddTodo = () => {
        const { addTodo, data } = this.props;
        const { inputValue } = this.state;
        if (inputValue) {
            addTodo({ id: data.length, name: inputValue });
            this.setState({ inputValue: "" });
        } else {
            this.setState({ emptyInput: true })
        }

    }
    render() {
        const { data } = this.props;
        const { inputValue, emptyInput } = this.state;
        console.log(this.props);
        return (
            <React.Fragment>
                <h1>Add your Todos</h1>
                <AddTodo
                    inputValue={inputValue}
                    emptyInput={emptyInput}
                    handleAddTodo={this.handleAddTodo}
                    handleInputValue={this.handleInputValue}
                />
                <TodoList todoList={data} />
            </React.Fragment>

        )
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (payload) => dispatch({ type: 'ADD', payload })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
