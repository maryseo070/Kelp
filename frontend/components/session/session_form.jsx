import React from 'react';
import {Route, Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // .then(() => this.props.history.push('/'));
  }

  updateEmail(e){
    this.setState({email: e.currentTarget.value});
  }

  updatePassword(e){
    this.setState({password: e.currentTarget.value});
  }

  render() {
    // console.log(this.props.errors.session);
    if (this.props.formType === 'login') {
      return(
        <div>
          <div className="main-header-wrapper">
            <a href="/" className="welcome-logo" >Kelp</a>
          </div>

          <div className='entire-session-form'>
            <ul>
              { this.props.errors.session ? this.props.errors.session.map((error)=>{
                <li>{error}</li>;
                }) : null }
              </ul>

                <form onSubmit={this.handleSubmit} className="session-form">
                  <div classname="login-header">
                    <h1>
                      Log In to Kelp
                    </h1>
                  </div>

                  <h3 classname="login-header">
                    New to Kelp? {this.props.navLink}
                  </h3>

                  <input className="session-email" placeholder="Email" type="text" value={ this.state.email } onChange={ this.updateEmail } />

                  <input className="session-password" placeholder="Password" type="password" value={ this.state.password } onChange={ this.updatePassword } />

                  <input type="submit" value={this.props.formType} ></input>

                  <div className="signup-link">
                    New to Kelp? {this.props.navLink}
                  </div>

                </form>


            </div>

          </div>
      );
    } else {
      return (
        "work on login first"
      );
    }
  }

}

export default SessionForm;
