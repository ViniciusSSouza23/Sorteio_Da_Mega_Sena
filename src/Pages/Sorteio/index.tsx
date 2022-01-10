import { useEffect, useState } from "react";
import { Box_Number } from "../../Components/Box-number";
import { Container,Button } from "./style";


export function Sorteio()
{
    const [numero,Setnumeros]= useState([0,0,0,0,0,0]);
    
    function Sortear()
    {
        //@ts-ignore
        let numeros=[];
        
        for (let i = 0 ; i<6;i++)
        {
            let op= Math.floor(Math.random()*(60+1));
            //@ts-ignore
            if(!numeros.includes(op))
            {
                numeros[i] = op;
            }
            else{
                op=Math.floor(Math.random()*(60+1));
                numeros[i]=op;
            }
        }
        //@ts-ignore
        Setnumeros(numeros);
        

        
    }
    
    
   

    
        return (
            <>
                <Container>
                    {numero.map(nume=>(<Box_Number num={nume}/>))}
                   
                
                </Container>
                <Button onClick={Sortear} className="btn btn-lg rounded-pill btn-primary">Sortear</Button>
            </>
        );
    
    
}