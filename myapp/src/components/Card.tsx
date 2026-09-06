import Button from "./Button";

type UserCardProps = {
    user: {
        name: string
        role: string
    }
    isOnline: boolean;
}


// function ConditionalButtonRendering ({isOnline}: {isOnline:boolean}){
//     if (isOnline) {
//         return(
//             <Button
//             text= "Praise"
//             variant="primary"
//             />
//         )
//         }
//         else {
//             return(
//                 <Button
//                 text="Nudge"
//                 variant="secondary"
//                 onclick={()=>alert("Please come online")}
//                 />
//             )
//             }

// }
export default function Card({ user, isOnline = false }: UserCardProps) {
    return (
        <div className="bg-yellow-200 w-67  m-8 p-4 rounded-xl mx-auto">
            <h3 className="font-bold text-2xl text-blue-500">{user.name}</h3>
            <p className="text-blue-400 lowercase">{user.role}</p>
            <p className={`${isOnline ? 'text-green-400' : 'text-red-400'}`}>{isOnline ? "✅ Online" : "❌ Offline"}</p>

            {/* <ConditionalButtonRendering isOnline = {isOnline}/> */}

            {isOnline ? (
                <Button
                    text="Praise"
                    variant="primary"
                />
            ) : (
                <Button text="Nudge"
                    variant="secondary"
                    onclick={() => alert("Please come online")} />
            )
            }
        </div>
    )
}