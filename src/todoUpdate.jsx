import { useState } from "react";
import axios from "axios";

export function TodoUpdate() {

    const [id, setId] = useState('');
    const [task, setTask] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
        console.log('Task id :', e.target.value)
    }

    const handleTaskChange = (e) => {
        setTask(e.target.value);
        console.log('TaskName :', e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const changeTask = {
        "task": "Go to Walking",
        "completed": false,
        "title":"i m changed"
    };


    axios.put('https://todo.omsent.in/api/tasks/5', changeTask)
        .then(res => {
            console.log(res);
            console.log(res.data)
        })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Updating the Task Id data:
                    <input type="number" name="id" value={id} onChange={handleIdChange}></input>
                </label>
                <button>Update Id</button>
                <br />
                <label>Updating the task Name data:
                    <input type="number" name="task" value={task} onChange={handleTaskChange}></input>
                </label>
                <button type="submit">Update task</button>

            </form>
        </div>
    )
}