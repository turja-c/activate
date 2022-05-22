import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

export default function HomeNavbar() {
    return (
        <Navbar bg="light" expand="lg"
        style={{
            paddingTop: '2rem',
            paddingLeft: '3rem',
            paddingBottom: '1rem',
            color: 'white'
            }}>       
            <Container>
                <Navbar.Brand href="/homepage"
                    style={{
                        fontSize: '2rem',
                        fontWeight: '10rem'
                        }}>          
                    BrbR
                </Navbar.Brand>
                

            </Container>
        </Navbar>
    );
}