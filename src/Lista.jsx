import { useState } from "react";
function Lista(){
    const[Nombres,setNombres]=useState(["Ana","Luis","Carlos","Daniel","Gabriel"]);
    return(
        <div>
            <h3>Lista Nombres</h3>
            <ul>
                {Nombres.map((nombre,index)=>(
                    <li key={index}>{nombre}</li>

                ))}
            </ul>
            <button onClick={()=>setNombres(Nombres.slice(0,-1))}>Eliminar Ultimo</button>
        </div>
    )
}
export default Lista;