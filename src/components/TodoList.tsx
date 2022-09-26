import React from "react";
import {observer} from "mobx-react-lite"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {TodoStore} from "../store/TodoStore";
import Todo from "./Todo";

interface TodoListProps {
    store: TodoStore
}

const TodoList = observer(({store}: TodoListProps) => {
    const {todos = [], addTodo, updateTodo, deleteTodo, countTodos} = store ?? {};

    const handleButtonClick = () => {
        const name = window.prompt("Todo title")
        if (name) {
            addTodo(name)
        }

    }

    return (
        <>
            <span>Total items: {countTodos}</span>
            <Card style={{marginTop: '24px', padding: '8px'}}>
                {!countTodos && <Card.Body>List of todos is empty.</Card.Body>}
                {Boolean(countTodos) &&
                    <Card.Text>
                       <ul>
                           {todos?.map(item => <li><Todo item={item} deleteItem={deleteTodo} updateItem={updateTodo}/></li>)}
                       </ul>
                    </Card.Text>
                }
            </Card>
            <Button style={{marginTop: '10px'}} variant="primary" onClick={handleButtonClick}>create todo</Button>
        </>
    )
})

export default TodoList