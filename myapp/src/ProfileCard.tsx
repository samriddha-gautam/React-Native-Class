type ProfileCardProps ={
    name : string 
    role: string 
    skills: string[]
    isOnline:boolean
}

function ProfileCard ({name , role , skills , isOnline} : ProfileCardProps){
    return(
        <>
            <div className="bg-blue-400 p-2 m-2 mx-auto w-56 rounded-xl">
                <h2>{name}</h2>
                <p>{role}</p>
                <p>{isOnline? "ON" : "OFF"}</p>
                <ul>
                    {skills.map((skill)=>(
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default ProfileCard