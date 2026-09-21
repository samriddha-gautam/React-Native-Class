
type CardProps = {
    boolValue: boolean;
}



export default function Card({  boolValue = false }: CardProps) {
    return (
        <div>
           
            <p className={`${boolValue ? 'text-green-400' : 'text-red-400'}`}>{boolValue ? "✅ " : "❌ "}</p>

            {/* <ConditionalButtonRendering boolValue = {boolValue}/> */}

            
        </div>
    )
}