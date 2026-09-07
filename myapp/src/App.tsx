import { use, useEffect, useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [rating, setRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    console.log('Rating changed!',rating)
  },[rating]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  function increaseRating() {
    setRating((prev) => Math.min(prev + 1, 5));
  }

  function decreaseRating() {
    setRating((prev) => Math.max(prev - 1, 0));
  }

  if (submitted) {
    return (
      <p>
        Thank you ! {name} You rated us {rating}⭐
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter your age..."
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <div>
        <Button text="+" variant="primary" onclick={increaseRating} />
        <Button text="-" variant="danger" onclick={decreaseRating} />
      </div>
      <Button type="submit" variant="secondary" text="Submit" />
    </form>
  );
}
