import Button from "./Button";

type CardProps = {
    entity: {
        id: number
        name: string
        }
    boolValue: boolean;
}



export default function Card({ entity, boolValue = false }: CardProps) {
    return (
        <div>
            <h3 className="font-bold text-2xl text-blue-500">{entity.name}</h3>
            <p className={`${boolValue ? 'text-green-400' : 'text-red-400'}`}>{boolValue ? "✅ Online" : "❌ Offline"}</p>

            {/* <ConditionalButtonRendering boolValue = {boolValue}/> */}

            
        </div>
    )
}