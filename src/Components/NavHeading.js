import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../store/action/actions";
import { withRouter } from "react-router";
const NavHeading = (props) => {
  const logoutHandler = () => {
    props.logout();
    props.history && props.history.push("/");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" collapseOnSelect className="rounded">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            E.comm
          </Navbar.Brand>
          <Nav className="ml-auto">
            {props.user ? (
              <Nav.Link onClick={logoutHandler}>
                <i class="fas fa-sign-out-alt"></i> &nbsp; Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                <i className="fas fa-sign-in-alt"></i> &nbsp; LogIn
              </Nav.Link>
            )}
            &nbsp;&nbsp;&nbsp;
            <Nav.Link as={NavLink} to="/orders">
              <i className="fas fa-shopping-bag"></i> &nbsp; Orders
            </Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link as={NavLink} to="/cart">
              <i className="fas fa-shopping-cart"></i> &nbsp; Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavHeading)
);
