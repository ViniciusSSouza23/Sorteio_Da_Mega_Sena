import { Routes,Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Sorteio } from "./Pages/Sorteio";


export default function Rotas()
{
    return(
        <Routes>
            
            <Route //@ts-ignore
            exact  path='/' element={<Home/>}/>
            <Route //@ts-ignore
             exact path='/sorteio' element={<Sorteio/>}/>
        </Routes>
    );
}