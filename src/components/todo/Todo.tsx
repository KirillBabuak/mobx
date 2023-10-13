import React from "react";
import Button from "react-bootstrap/Button";
import {Todo as TodoType} from "../../store/TodoStore";

interface TodoProps {
    item: TodoType
    updateItem: (data: TodoType)=> void
    deleteItem: (id: number)=> void
}

const Todo = ({item, updateItem, deleteItem}: TodoProps) => {
    const {id, name, isCompleted} = item;

    const handleDeleteItem = () => {
        deleteItem(id)
    }

    const handleUpdateStatus = () => {
        updateItem({...item, isCompleted: !isCompleted})
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', margin: '4px'}}>
            <div>
                <span>{id}: </span>
                <strong style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>{name} </strong>
            </div>
            <Button variant="success" onClick={handleUpdateStatus} style={{margin: '0 10px'}}>{isCompleted ? 'undo': 'complete'}</Button>
            <Button variant="danger" onClick={handleDeleteItem}>Remove</Button>
        </div>
    )
}

export default Todo