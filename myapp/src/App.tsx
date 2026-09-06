import Button from "./components/Button";
import Card from "./components/Card";

export default function App(){
  return(
    <div>
      <Card
        user={{ 
          name:"Samriddha Gautam",
          role :"Senior Developer"
        }}
        isOnline = {true}
      />
      <Card
        user={{ 
          name:"John Doe",
          role :"Junior Developer"
        }}
        isOnline = {false}
      />
      <Card
        user={{ 
          name:"Alice Wilson",
          role :"UI/UX"
        }}
        isOnline = {true}
      />
      <Button 
        text="Logout"
        variant="danger"
        onclick={()=>alert("You have been logged out")}
      />
    </div>
  )
}