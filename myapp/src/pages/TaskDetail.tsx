import { useParams , useNavigate} from "react-router-dom";
import Button from "../components/Button";

export default function TaskDetail(){
    const {taskId} = useParams()
    const navigate = useNavigate()

    return(
        <div>
            <p>Viewing Task #{taskId}</p>
            <Button
                text="Back to list"
                onclick={()=>navigate("/tasks")}
                variant="primary"
            />
        </div>
    )
}