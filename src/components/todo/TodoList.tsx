import React from "react";
import {observer} from "mobx-react-lite"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {todoStore} from "../../store/TodoStore";
import Todo from "./Todo";

const TodoList = () => {
    const {todos = [], addTodo, updateTodo, deleteTodo, countTodos} = todoStore;

    const handleButtonClick = () => {
        const name = window.prompt("Todo title");
        addTodo(name ?? 'unknown')
    }

    return <>
        <span>Total items: {countTodos}</span>
        <Card style={{marginTop: '24px', padding: '8px'}}>
            {!countTodos && <Card.Body>List of todos is empty.</Card.Body>}
            {Boolean(countTodos) &&
                <Card.Text>
                    <ul>
                        {todos?.map(item => <li key={item.id}><Todo item={item} deleteItem={deleteTodo} updateItem={updateTodo}/>
                        </li>)}
                    </ul>
                </Card.Text>
            }
        </Card>
        <Button style={{marginTop: '10px'}} onClick={handleButtonClick}>create todo</Button>
    </>
}

export default observer(TodoList)