import {action, computed, makeObservable, observable } from "mobx";

export type Todo = {
    id: number,
    name: string,
    isCompleted: boolean;
}

export class TodoStore {
    todos: Todo[] = []

    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: action.bound,
            updateTodo: action.bound,
            deleteTodo: action.bound,
            countTodos: computed,
        });
    }

    addTodo(name: string){
        this.todos.push({id: new Date().getTime(), name, isCompleted: false})
    }

    updateTodo(updatedTodo: Todo){
        this.todos = this.todos.map(item=> item.id === updatedTodo.id ? updatedTodo : item)
    }

    deleteTodo(id: number){
        this.todos = this.todos.filter(item => item.id !== id)
    }

    get countTodos(){
        return this.todos.length
    }
}

export const todoStore = new TodoStore()