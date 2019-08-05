import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

const Header = () =>
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">NEXT</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/schedule">Schedule</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/speakers">Speakers</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about">About</NavLink>
      </NavItem>
    </Nav>
  </Navbar>;

export default Header;