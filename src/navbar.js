import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand> Croxetean2 </NavbarBrand>
        
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Ropa</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Deco Hogar</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Anime & series
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Pokemon
                  </DropdownItem>
                  <DropdownItem>
                    Monokuma
                  </DropdownItem>
                  <DropdownItem>
                    Kimetsu no Yaiba
                  </DropdownItem>
                  <DropdownItem>
                    Star Wars
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    ver todo
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#">Encargá a pedido</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contacto</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
