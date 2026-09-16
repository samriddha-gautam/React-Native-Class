import { useParams } from "react-router-dom"

export default function TaskDetail(){
    const {taskId} = useParams();

    return <p>Details of the task: {taskId}</p>
}