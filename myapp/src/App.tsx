import { useEffect, useState } from "react";
import Card from "./components/Card";

type todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
        );
        const data: todo[] = await response.json();
        setTasks(data);
      } catch (error) {
        setError("Could not load tasks . Please try again");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTasks();
  }, []);

  if (isLoading) {
    return <p>Loading tasks...</p>;
  }
  if (error) {
    return <p>Error loading tasks...</p>;
  }
  if (tasks.length === 0) {
    return <p>No tasks found</p>;
  }

  return (
    <>
      <h2>
        <b>Your TODO</b>
      </h2>
      {tasks.map((task) => (
        <Card
          key={task.id}
          entity={{ id: task.id, name: task.title, extraproperty:task.userId }}
          boolValue={task.completed}
        />
      ))}
    </>
  );
}
