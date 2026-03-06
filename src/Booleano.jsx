import { useState } from "react";
function Booleano(){
    const[booleano, setbooleano]=useState(true);
    let colorTexto;
    let mensaje;
    if(booleano==true){
        colorTexto="blue";
        mensaje="El booleano es verdadero";
    }else{
        colorTexto="red";
        mensaje="El booleano es falso";
    }
    return(
        <div>
            <h3 style={{ color: colorTexto}}>{mensaje}</h3>
            <button onClick={()=>setbooleano(!booleano)}>Cambiar Booleano</button>
        </div>
    )
}
export default Booleano;