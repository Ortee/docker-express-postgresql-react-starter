import React, { Component, PropTypes } from 'react';
import { Router, Route, Link , browserHistory } from 'react-router';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import './main.scss';

class Main extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Container>
        <Row>
          <header>
            <p className="header-title">Docker Express PostgreSql React Starter</p>
          </header>
          <nav>
            <Nav inline>
              <NavItem className="header-item">
                <Link className="nav-link" to={'/posts'}>Posts</Link>
              </NavItem>
              <NavItem className="header-item">
                <Link className="nav-link" to={'/author'}>Author</Link>
              </NavItem>
              <NavItem className="header-item">
                <NavLink href="http://github.com/ortee"><i class="fa fa-github" /> Github</NavLink>
              </NavItem>
            </Nav>
          </nav>
          <hr />
          {React.cloneElement(this.props.children, this.props)}
        </Row>
      </Container>
    );
  }
}

export default Main;
