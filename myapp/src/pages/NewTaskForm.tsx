import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";

export default function NewTaskForm(){
    const [title,setTitle] = useState<string>("");
    const navigate = useNavigate()

    function handleSubmit(event:React.FormEvent){
        event.preventDefault()
        console.log(`Added new task:${title}`)
        navigate(-1)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required placeholder="Task title..."/>
            <Button
                text="Add Task"
                type="submit"
                variant="primary"
            />
        </form>
    )
}