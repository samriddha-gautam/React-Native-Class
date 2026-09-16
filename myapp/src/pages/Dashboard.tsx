import { useParams } from "react-router-dom"

export default function TaskDetail(){
    const {userId} = useParams();

    return <p>Hello there user {userId}</p>
}