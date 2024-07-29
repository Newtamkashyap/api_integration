import { useEffect, useState } from "react";
import axios from "axios";


export function TodoList() {

    const [todoList, setTodoList] = useState([]);

    useEffect(()=>{
        axios.get('https://todo.omsent.in/api/tasks')
        .then((res=>{
            console.log(res.data);
            setTodoList(res.data);
        }))
        .catch((error)=>{
            console.log('There was an error fetching the tasks!', error)

        })
        

    },[])
    return (
        <div>
            <h5>TodoList</h5>
            <ol>
                {todoList.map(obj =>
                    <li key={obj.id}>{obj.id} {obj.task}
                    </li>)}
            </ol>

        </div>
    )
}