type ButtonProps={
    text : string ;
    onclick ?: () =>  void;
    variant : "primary" | "secondary" | "danger" ;
    type ?: "button" | "submit" | "reset"
}

export default function Button ({text ,onclick ,type = "button" , variant = "primary" } : ButtonProps){
    return (
        <button 
            type={type}
            onClick={onclick}
            className={`font-bold cursor-pointer p-2 rounded-xl hover:opacity-75 text-white ${variant === "primary" ? 'bg-green-400 text-white' : variant === "secondary" ? 'bg-yellow-500 text-white' : 'bg-red-600 text-white' } `}
        >
            <h3>
                {text}    
            </h3>
        </button>
    
    )
}