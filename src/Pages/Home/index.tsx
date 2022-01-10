import { Card, Container,  Text, Title } from "./style";

function Sortear()
{

}

export function Home()
{
    return(
       <Container>
           <Card>
               <Title>Bem Vindo ao Mega-Sena Hack</Title>
               <hr/>
               <Text>
                    O app faz um sorteio randomico de possiveis numeros da mega sena, não é feita uma análise de probalidade, apenas um sorteio randômico de numeros aleatórios, ficando a críterio do usuario seguir as sugestões ou não. 
               </Text>
               <Text>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit repellendus voluptate ipsam debitis? Ipsum velit, quam molestiae eius ea, enim deleniti similique perspiciatis dignissimos sunt quos aut rerum sit.
               </Text>
               <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam velit amet quam tenetur voluptatem. Dolores consequatur corporis, libero soluta temporibus quibusdam blanditiis quaerat voluptatibus. Minus accusantium blanditiis voluptas quae beatae.</Text>
               <a href="/sorteio" className="btn btn-lg btn-info rounded-pill">Sortear</a>
           </Card>
       </Container> 
    );
}