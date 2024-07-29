import { useState } from "react";
import axios from "axios";


export function TodoEdit() {
    const [editTask, setEditTask] = useState('');

    const handleChange = (event) => {
        setEditTask(event.target.value);
        console.log("Task name editing :", event.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }
    const task = { task: editTask };

    const taskChange={
        
            "task": "Go to Walking man",
            "completed": false
            
    }

    axios.post("https://todo.omsent.in/api/tasks")
    .then((res)=>{
        console.log(res);
        console.log(res.data)
    })
    .catch((error)=>{
        console.log("there is an error",error);
    });




return (
    <div>
        <form onSubmit={handleSubmit}>
            <lable>Edit TodoList: </lable>
            <input type="number" />
            <button type="submit" name="editTask" value={editTask} onClick={handleChange}>Edit</button>
        </form>
    </div>
)
}