import {useContext} from "react"
import UserContext from "../context/UserContext"

export default function ProfileMenu(){
    const user = useContext(UserContext)

    if(!user) return <p>Not logged in!</p>

    return  (
        <div>
        <h1>User Profile</h1>
        <h4>User Id: <b>
            {user.id}
            </b>
            </h4>
        <h4>Name: {user.name}</h4>
        <h4>Lives in: {user.location}</h4>
        </div>
    )
}