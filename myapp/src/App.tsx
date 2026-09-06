
import ProfileCard from "./ProfileCard";

export default function App (){

  return(
    <div >
      <h1 >User List</h1>
      <ProfileCard
        name = "Samriddha Gautam"
        role="Senior Developer"
        skills={["React Native", "Mobile Developer" , "Typescript"]}
        isOnline={true}
      />
      <ProfileCard
        name = "John Doe"
        role="Developer"
        skills={["React", "Web Developer" , "Typescript"]}
        isOnline={false}
      />
    </div>
  )
}