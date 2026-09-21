import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <Link to="/tasks" className="text-green-500">All Tasks</Link>
        </nav>
    )
}