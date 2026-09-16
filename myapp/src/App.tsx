import { Routes, Route } from "react-router-dom";
import TaskList from "./pages/TaskList";
import TaskDetail from "./pages/TaskDetail";
import NewTaskForm from "./pages/NewTaskForm";
import TaskLayout from "./pages/TaskLayout";
export default function App() {
  return (
    <Routes>
      <Route path="/tasks" element={<TaskLayout/>}>
        <Route index element={<TaskList/>}/>
        <Route path="new" element={<NewTaskForm/>}/>
        <Route path=":taskId" element={<TaskDetail/>}/>
      </Route>
    </Routes>
  );
}
