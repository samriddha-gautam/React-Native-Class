import ThemeToggle from "./components/ThemeToggle";
import UserContext from "./context/UserContext";
import Dashboard from "./pages/Dashboard";

import ProfileMenu from "./pages/ProfileMenu";

export default function App() {
  const user = {
    id:1,
    name:"John",
    age:32,
    location:"Pokhara",
    isActive:true
  }
  return (
    <UserContext.Provider value = {user}>
      <ProfileMenu/>
      <Dashboard/>
      <ThemeToggle/>
    </UserContext.Provider>
  );
}
