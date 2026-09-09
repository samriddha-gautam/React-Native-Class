import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  status: "completed" | "in-progress" | "failed"
};

const initialTasks: Task[] = [
  { id: 1, title: "Read", completed: true , status:"completed"},
  { id: 2, title: "Code", completed: false , status:"in-progress"},
  { id: 3, title: "Play", completed: false , status: "completed"},
];

export default function App() {
    
    const [tasks, setTasks] = useState<Task[]>(initialTasks)

    const toggleTaskComplete = (id:number) => {
        
        setTasks(tasks.map((task)=>task.id === id? {...task , completed:!task.completed}:task))
  }
    
    function completedTasks({status}: {status :"completed" | "in-progress" | "failed"}){
        if(status === "completed")
            return <p className="text-green-400"><b>The task has been completed</b></p>
        if(status=== "in-progress")
            return <p className="text-yellow-500"><b>The task is in progres ...</b></p>
        return <p className="text-red-600"><b>Failed to do the task!</b></p>
    }
  return (
    <div>
      {tasks.map((task) => (
        <div  className="bg-yellow-200 w-67  m-8 p-4 rounded-xl mx-auto">
          <Card
            key={task.id}
            entity={{ id: task.id, name: task.title }}
            boolValue={task.completed}
          />
          <Button
            key={task.id}
            text={task.completed ? "Done" : "Mark Cmplete"}
            onclick={()=>toggleTaskComplete(task.id)}
            variant={task.completed ? "primary" : "secondary"}
          />
        <div key={task.id}>
            {completedTasks({status:task.status})}
        </div>
        </div>
        
      ))}
     
      
    </div>
  );
}
