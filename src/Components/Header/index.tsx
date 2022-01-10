import { Nav, Navbar, NavItem, NavLink } from "reactstrap";
import { Container } from "./style";


export function Header()
{
    return(
        <Container>
           <Navbar color='dark' dark expand='md' >
               <Nav  className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/sorteio">Sortear</NavLink>
                    </NavItem>
               </Nav>
               
           </Navbar>
            
        </Container>
    );
}