import React, { PureComponent } from 'react'

export default class TodoList extends PureComponent {
    render() {
        const { todoList } = this.props;
        console.log(todoList);
        return (
            <React.Fragment>
                <h1>Todo List</h1>
                {todoList.length > 0 && todoList.map(({ name, id }) =>
                    <p key={id}>{name}</p>
                )}
            </React.Fragment>
        )
    }
}
