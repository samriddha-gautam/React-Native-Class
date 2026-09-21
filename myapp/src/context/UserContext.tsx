import { createContext } from "react";

type User = {
    id:number,
    name:string,
    age:number,
    location:string , 
    isActive:boolean,
}

const UserContext = createContext<User |null>(null)

export default UserContext;