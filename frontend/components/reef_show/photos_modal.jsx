import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import PicModalSidebar from './photos_modal_sidebar.jsx';

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
    backgroundColor       : 'black'
  },
};


// Modal.setAppElement('root');
Modal.setAppElement(document.getElementById('root'));


class PicModal extends React.Component {
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
    this.grow = this.grow.bind(this);
    this.shrink = this.shrink.bind(this);
    this.nextPic = this.nextPic.bind(this);
    this.prevPic = this.prevPic.bind(this);
    }

  openModal(url, idx) {
    this.setState({modalIsOpen: true, imgUrl: url, imgIdx: idx});
  }


  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  grow(e) {
    $(e.target).addClass("reef-pic-big");
  }

  shrink(e){
    $(e.target).removeClass("reef-pic-big");
  }


  nextPic() {
    let allPhotos = Object.values(this.props.photos);
    let targetPhoto;
    if (allPhotos) {
      targetPhoto = allPhotos[(this.state.imgIdx + 1) % allPhotos.length]
      this.setState({imgUrl: targetPhoto.image_url, imgIdx: this.state.imgIdx + 1});
    }
  }

  prevPic() {
    let allPhotos = Object.values(this.props.photos);
    let targetPhoto;
    let numPhotos = allPhotos.length;
    let newPos = (numPhotos + (this.state.imgIdx - 1)) % numPhotos;
    if (allPhotos) {
      targetPhoto = allPhotos[newPos];
      this.setState({imgUrl: targetPhoto.image_url, imgIdx: newPos});
    }
  }

  render() {
    let pics = [];
    let allPhotos = Object.values(this.props.photos);
    if (allPhotos) {
      allPhotos.map( (photo) => (
        pics.push(photo.image_url)
      ));
    }
   return (
     <div>
       <div className='show-imgs'>
         <img className="reef-pic-small" onClick={ () => this.openModal(pics[0], 0) } onMouseEnter={this.grow} onMouseLeave={this.shrink} src={pics[0]} />
         <img className="reef-pic-default" onClick={ () => this.openModal(pics[1], 1) } onMouseEnter={this.grow} onMouseLeave={this.shrink} src={pics[1]} />
         <img className="reef-pic-small" onClick={ () => this.openModal(pics[2], 2) } onMouseEnter={this.grow} onMouseLeave={this.shrink} src={pics[2]} />
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
         className="modal-all"
       >

       <a className="modal-close-button" onClick={this.closeModal}>Close</a>
        <h2 ref={subtitle => this.subtitle = subtitle}></h2>
          <a className="modal-next-button" onClick={() => this.prevPic()}>
            <img className="modal-next-button" src={window.leftArrow}></img>
          </a>

          <div className="modal-pic-box">
            <img className="modal-pic" src={this.state.imgUrl} onClick={() => this.nextPic()}></img>
          </div>

          <a className="modal-next-button" onClick={() => this.nextPic()}>
            <img className="modal-next-button" src={window.rightArrow}></img>
          </a>

          <div className="modal-info">
            <PicModalSidebar className="modal-sidebar" reviews={this.props.reviews}/>
          </div>

       </Modal>
     </div>
   );
 }
}

export default PicModal;
