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

  renderErrors() {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li className="rendered-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
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
            <form onSubmit={this.handleSubmit} className="session-form">
              <div className="login-header">
                <h1>
                  Log In to Kelp
                </h1>
              </div>

              <h3 className="login-header2">
                New to Kelp? {this.props.navLink}
              </h3>

              <input className="session-email" placeholder="Email" type="text" value={ this.state.email } onChange={ this.updateEmail } />

              <input className="session-password" placeholder="Password" type="password" value={ this.state.password } onChange={ this.updatePassword } />

              <input className="login-button" type="submit" value="Log In" ></input>

              <div className="signup-link">
                New to Kelp?  {this.props.navLink}
              </div>

              <div>
                {this.renderErrors()}
              </div>

              <button className="guest" onClick={this.props.guestLogin}>Guest Login</button>

            </form>

            <img src="https://img.etsystatic.com/il/8dfe65/588919113/il_570xN.588919113_n9xk.jpg" alt="reef-illustration" className="login-image" />

            </div>

          </div>
      );
    } else if (this.props.formType === 'signup') {
      return (
        <div>
          <div className="main-header-wrapper">
            <a href="/" className="welcome-logo">Kelp</a>
          </div>

          <div className='entire-session-form'>
            <form onSubmit={this.handleSubmit} className="session-form">
              <div className="login-header">
                <h1>
                  Sign Up for Kelp
                </h1>
              </div>

              <h3 className="login-header2">
                Already on Kelp? {this.props.navLink}
              </h3>



              <input className="session-email" placeholder="Email" type="text" value={ this.state.email } onChange={ this.updateEmail } />

              <input className="session-password" placeholder="Password" type="password" value={ this.state.password } onChange={ this.updatePassword } />

              <input className="login-button" type="submit" value="Sign Up" ></input>

              <div className="signup-link">
                Already on Kelp?  {this.props.navLink}
              </div>

            </form>

                <img src="https://img.etsystatic.com/il/8dfe65/588919113/il_570xN.588919113_n9xk.jpg" alt="reef-illustration" className="login-image" />

            </div>
          </div>
      );
    }
  }

}

export default SessionForm;


// <span className="guest" onClick={this.props.guestLogin}>
//   <div className="register-txt"> Guest Login </div>
// </span>
