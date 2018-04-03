import React from 'react';
import {Route, Link, withRouter } from 'react-router-dom';
import {merge} from 'lodash';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/reefs'));
  }

  updateEmail(e){
    this.setState({email: e.currentTarget.value});
  }

  updatePassword(e){
    this.setState({password: e.currentTarget.value});
  }

  updateFirstName(e){
    this.setState({first_name: e.currentTarget.value});
  }

  updateLastName(e){
    this.setState({last_name: e.currentTarget.value});
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

  render(props) {
    let title;
    let question;
    let buttonVal;
    let first_name;
    let last_name;

    if (this.props.formType === 'login') {
      title = "Log In to Kelp";
      question = "New to Kelp?";
      buttonVal = "Log In";
      first_name = "";
      last_name = "";
    } else if (this.props.formType === 'signup') {
        title = "Sign Up for Kelp";
        question = "Already on Kelp?";
        buttonVal = "Sign Up";
        first_name = <input className="session-input" placeholder="First Name" type="text" value={ this.state.first_name } onChange={ this.updateFirstName } />;
        last_name = <input className="session-input" placeholder="Last Name" type="text" value={ this.state.last_name } onChange={ this.updateLastName } />;
    }
    return (

    <div>
      <div className="main-header-wrapper">
        <a href="#/reefs" className="kelp-logo" >
          <img className="thanks-elliot"src={window.logo} />
        </a>
      </div>


      <div className='entire-session-form'>

        <div className="form-col">

            <form onSubmit={this.handleSubmit} className="session-form">
              <div className="login-header">
                <h1>
                  {title}
                </h1>
              </div>

              <h3 className="login-header2">
                {question} {this.props.navLink}
              </h3>

              {first_name}
              {last_name}
              <input className="session-input" placeholder="Email" type="text" value={ this.state.email } onChange={ this.updateEmail } />

              <input className="session-input" placeholder="Password" type="password" value={ this.state.password } onChange={ this.updatePassword } />

              <input className="login-button" type="submit" value={buttonVal} ></input>

              <div className="signup-link">
                {question}  {this.props.navLink}
              </div>

              <div>
                {this.renderErrors()}
              </div>
            </form>

            <button className="guest" onClick={() => this.props.guestLogin()}>Guest Login</button>
        </div>

        <img src={window.reef} alt="reef-illustration" className="login-image" />


        </div>

      </div>
      );
  }
}



export default withRouter(SessionForm);


// <span className="guest" onClick={this.props.guestLogin}>
//   <div className="register-txt"> Guest Login </div>
// </span>
