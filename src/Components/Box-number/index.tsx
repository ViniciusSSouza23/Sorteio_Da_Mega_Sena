import { Container } from "./style";

interface Boxprops{
    num: number
}


export function Box_Number(props:Boxprops){

    return (
        <Container>
            <h2>{props.num}</h2>
        </Container>
    );
    
}