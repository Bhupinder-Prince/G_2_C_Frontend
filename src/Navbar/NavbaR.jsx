import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route,Routes,useNavigate } from "react-router-dom";
import GrowerDashboard from "../Grower/GrowerDashboard";
import Signup from "../signup/Signup";
import Login from "../login/Login";


export default function NavbaR()
{
    let Navigate=useNavigate();
    return(
<>
    <Navbar className= "bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">G_2_C</Navbar.Brand>
        <img
                  className=" h-14 w-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EK5Ol288fR1BkUD-Yr4I7vxbcsZf-YywtQ&usqp=CAU"
                  alt="Your Company"
                />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <input type="button" value="Signup" onClick={()=>{Navigate("/Signup")}} className="rounded-md mx-4 flex justify-end bg-green-600 px-3 w-26 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"></input>
            <input type="button" value="Login" onClick={()=>{Navigate("/Login")}}className="rounded-md bg-green-600 mx-4 px-3 w-26 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"></input>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      


    <Routes>
        {/* <Route path="/">{}</Route> */}
        <Route path="/Signup"element={<Signup></Signup>}></Route>
        <Route path="/Login"element={<Login></Login>}></Route>
        <Route path="/GrowerDashboard" element={<GrowerDashboard></GrowerDashboard>}></Route>
    </Routes>
    </>
    )
}