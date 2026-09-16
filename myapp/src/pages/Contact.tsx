import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Contact() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate("/dashboard/ram");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" placeholder="Enter your email" required />
      <label>Name:</label>
      <input type="text" placeholder="Enter you name:" required />
      <label>Message:</label>
      <textarea name="message" placeholder="Enter your password" required />

      <Button text="Submit" type="submit" variant="primary" />
    </form>
  );
}
