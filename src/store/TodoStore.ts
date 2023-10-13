import {action, computed, makeObservable, makeAutoObservable, observable} from "mobx";

export type Todo = {
    id: number,
    name: string,
    isCompleted: boolean;
}

// привер запроса для апи
// пример с makeAutoObservable
// https://github.com/hidaytraj/react-mobx-starter/blob/main/src/App.js
// https://codesandbox.io/s/react-ts-mobx-best-practices-pnig3?from-embed=&file=/src/stores/index.ts
// раздел actions перечитать, тк вроде как нужно все оборачитваь в actions в компоненте
// https://github.com/mobxjs/mobx-devtools - девтулз
// https://github.com/mobxjs/mobx-utils
// https://github.com/mobxjs/mobx/blob/main/packages/eslint-plugin-mobx/README.md

//

/*
* если что-то передаем в пропса, то нужно передавать весб стор, а не поле (раздел про реакт)
* судя по доке, нужно все компоненты оборачивать, которые слушают даннеы. даже если передаем через пропсы (раздел про реакт)
* */



class TodoStore {
    todos: Todo[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
        // makeObservable(this, {
        //     todos: observable,
        //     addTodo: action.bound,
        //     updateTodo: action.bound,
        //     deleteTodo: action.bound,
        //     countTodos: computed //(computed.struct),
        // });
    }

    addTodo(name: string) {
        const newTodo = {id: new Date().getTime(), name, isCompleted: false};

        this.todos.push(newTodo)
    }

    updateTodo(updatedTodo: Todo) {
        this.todos = this.todos.map(item => item.id === updatedTodo.id ? updatedTodo : item)
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(item => item.id !== id)
    }

    get countTodos() {
        return this.todos.length
    }
}

export const todoStore = new TodoStore()