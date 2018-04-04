import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {login, clearErrors} from '../../actions/session_actions';

const customStyles = {
  overlay: {
    backgroundColor       : 'rgba(0,0,0,0.7)',
    position              : 'fixed',
    top                   : 0,
    left                  : 0,
    right                 : 0,
    bottom                : 0,
    border                : 'none'
  },
  content : {
    position              : 'absolute',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflow              : 'auto',
    backgroundColor       : 'white'
  },
};

Modal.setAppElement(document.getElementById('root'));


class LogInModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      imgUrl: "",
      imgIdx: 0
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }

  openModal(url, idx) {
    console.log(this.props);
    this.setState({modalIsOpen: true, imgUrl: url, imgIdx: idx});
  }


  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let title = "Log In to Kelp";
    let question = "New to Kelp?";
    let buttonVal = "Log In";
    let first_name = "";
    let last_name = "";
// to={`/reefs/${this.props.reefId}/writeReview`}
   return (
     <div className="login-modal-all">
       <div className="show-buttons">
         <button onClick={() => this.openModal()} className="review-button"> ★ Write a Review</button>
       </div>
       <Modal
         isOpen={this.state.modalIsOpen}
         ariaHideApp={false}
         aria={{
           labelledby: "heading",
           describedby: "full_description"
          }}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={customStyles}
         contentLabel="Example Modal"
         className="login-modal-all"
       >

       <a className="modal-close-button" onClick={this.closeModal}>Close</a>
        <h2 ref={subtitle => this.subtitle = subtitle}></h2>

          <div className='modal-session-form'>

            <div className="form-col">

                <form onSubmit={this.handleSubmit} className="modal-inner-session-form">
                  <div className="login-header">
                    <h1>
                      {title}
                    </h1>
                  </div>

                  <h3 className="login-header2">
                    {question} <Link to="/signup" className="navLink" >Sign Up</Link>
                  </h3>

                  {first_name}
                  {last_name}
                  <input className="session-input" placeholder="Email" type="text" value={ this.state.email } onChange={ this.updateEmail } />

                  <input className="session-input" placeholder="Password" type="password" value={ this.state.password } onChange={ this.updatePassword } />

                  <input className="login-button" type="submit" value={buttonVal} ></input>

                  <div className="signup-link">
                    {question}  <Link to="/signup" className="navLink" >Sign Up</Link>
                  </div>


                </form>

                <button className="guest" onClick={() => this.props.guestLogin() } >Guest Login</button>
            </div>

            </div>

       </Modal>
     </div>
   );
 }
}

export default LogInModal;
