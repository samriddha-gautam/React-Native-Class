import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [count , setCount] = useState<number>(0)
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Failed to load users");
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  },[count]);
  if (isLoading) return <p>Loading user data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    <button className="cursor-pointer" onClick={()=>setCount(count+1)}>Click {count}</button>
    </ul>
    
  );
}
