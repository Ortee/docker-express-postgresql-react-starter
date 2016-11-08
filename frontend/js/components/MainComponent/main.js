import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav, NavItem, NavLink, Container, Row} from 'reactstrap';
import './main.scss';
import Alerts from '../AlertsComponent/alerts';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Alerts {...this.props} />
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
                <NavLink href="http://github.com/ortee"><i className="fa fa-github"/> Github</NavLink>
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

Main.propTypes =  {
  children: React.PropTypes.element,
};

export default Main;
