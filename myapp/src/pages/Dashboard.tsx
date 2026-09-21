import {useContext} from "react"
import UserContext from "../context/UserContext"

export default function Dashboard(){
    const user = useContext(UserContext)

    if(!user) return <p>Not logged in!</p>

    return  (
        <div>
            <p>Welcome User</p>
            <p>hello {user.name} from dashboard component!!</p>
            <p>You are {user.age} years old!</p>
        </div>
    )
}