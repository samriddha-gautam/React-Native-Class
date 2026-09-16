import { Link } from "react-router-dom";

const tasks = [
    {
        id:1,
        title:"Learn React Routing"
    },
    {
        id:2,
        title:"Push changes to github"
    }
]

export default function TaskList(){
    return(
        <ol>
            {tasks.map((task)=>(
                <li key={task.id}>
                    <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                </li>
            ))}
        </ol>
    )
}