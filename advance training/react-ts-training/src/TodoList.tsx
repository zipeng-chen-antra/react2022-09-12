import React, { useEffect, useState } from 'react'


type todoID = string;


interface Todo {
    id: todoID;
    task: string;
    completed: boolean;
}


const todoArr: Todo[] = [
    {id:"1",task:"cook",completed:false},
    {id:"2",task:"work",completed:false},
    {id:"3",task:"play",completed:false},
]


export default function TodoList() {
    const [todos,setTodos] = useState<Todo[]>([]);

    function deleteById(id:todoID){
        setTodos(prev=>{
            return prev.filter(todo=>todo.id!==id)
        })
    }


  return (
    <div>
        <h1>TodoList</h1>
        {todos.map(todo=>{
            return <Todo key={todo.id} todo={todo} deleteById={deleteById}/>
        })}
    </div>
  )
}


interface todoProps {
    todo: Todo
    deleteById: (id:todoID)=>void
}

function Todo({todo,deleteById}:todoProps):JSX.Element{
    const {id,task,completed} = todo;
    return <div>
        <div>ID: {id}</div>
        <div>Todo: {task}</div>
        <button onClick={()=>{deleteById(id)}}>delete</button>
    </div>
}