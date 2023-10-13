import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import {Menu} from "./components/menu/Menu";
import TodoList from "./components/todo/TodoList";


const App = () => {
    return (
        <div className="App">
            <Menu/>
            <Routes>
                <Route path="/">
                    <Route index element={<Navigate to="/todo" replace />} />
                    <Route path="todo" element={<TodoList/>}/>
                    <Route path="*" element={<div/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
