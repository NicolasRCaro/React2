import { useState } from "react";
function String(){
    const [Texto,setTexto]=useState("Paco");
    return(
        <div>
            <h3>{Texto}</h3>
                <input type="text" onChange={(e)=> setTexto(e.target.value)}/>
        </div>
    )
}
export default String