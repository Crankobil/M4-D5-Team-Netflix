import { Navbar, Form, FormControl, Nav, Container} from "react-bootstrap";
import logo from "../assets/netflix_logo.png"
import '../App.css'

const MyNavbar = () => {
  return (
      <>
  <Navbar variant="dark">
      <Navbar.Brand>
        <a href="#home">
          <img
            src={logo}
            width="80rem"
            alt=""
            className=" navbar-brand"
          />
        </a>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <a className="nav-link active" href="#home">
          Home <span className="sr-only">(current)</span>
        </a>
        <a className="nav-link" href="#tvshows">
          TV Shows
        </a>
        <a className="nav-link" href="#movies">
          Movies
        </a>
        <a className="nav-link" href="#recentlyAdded">
          Recently Added
        </a>
        <a className="nav-link" href="#mylist">
          My List
        </a>
      </Nav>
      <Form inline>
        <FormControl
          bg="dark"
          variant="light"
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
      </Form>
    </Navbar>

    <Container className="container-fluid mb-4">
    <Navbar variant="dark">
      <Navbar.Brand>
        <h3>TV Shows</h3>

      </Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
    </Navbar>
    </Container>

    </>

  );
};

export default MyNavbar;

