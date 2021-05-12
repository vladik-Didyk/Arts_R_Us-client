import React from "react";
import { Link } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Modal from 'react-modal';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalIsOpen: false,
      signupModalIsOpen: false
    };
  }

  onSignupClicked() {
    this.setState({ signupModalIsOpen: true });
  }

  onLoginClicked() {
    this.setState({ loginModalIsOpen: true });
  }
  render() {
    return (
      <>
      <div className="pb-5">
        <nav className="d-flex navbar fixed-top shadow bg-white rounded-2 w-100 ">
          <Link className="mx-4 nav-link text-dark" 
                to="/">
            <span className="material-icons d-inline-block align-text-top ">home</span>
          </Link>
          <Link className="nav-link text-dark" 
                to="/Tiles">
            <span>Art</span>
          </Link>
          <Link className="nav-link text-dark" 
                to="/LiveAuctioneers">
            <span>Auctioneers</span>
          </Link>
          <Link className="nav-link text-dark" 
                to="/three">
            <span>three</span>
          </Link>

          <form className="d-flex">
            <button onClick={() => this.onLoginClicked()} 
                    className="me-2 nav-link  btn btn-sm btn-outline-dark rounded-pill" 
                    type="button">Log In
            </button>
            <button onClick={() => this.onSignupClicked()} 
                    className="me-4 nav-link text-white btn btn-sm btn-dark rounded-pill" 
                      type="button" >Sign Up
            </button>
          </form>
        </nav>

        <Modal
                isOpen={this.state.loginModalIsOpen}
                onRequestClose={() => this.setState({ loginModalIsOpen: false })}       
                ariaHideApp={false}
                className=" w-25 m-auto mt-5 shadow rounded ">
                <Login closeLoginModal={() => this.setState({ loginModalIsOpen: false })} />
            </Modal>
            <Modal
                isOpen={this.state.signupModalIsOpen}
                onRequestClose={() =>  this.setState({ signupModalIsOpen: false })}
                ariaHideApp={false}
                className="w-25 m-auto mt-5 shadow rounded "
            >
                <Signup closeSignupModal={() => this.setState({ signupModalIsOpen: false })} />
            </Modal>
            </div>

      </>

    );
  }
}

export default NavBar;
