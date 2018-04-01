import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Modal.setAppElement('root');
Modal.setAppElement(document.getElementById('root'));


class PicModal extends React.Component {
  //props: reef, reviews (reviews have photo image url)
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
    debugger
    let allPhotos = this.props.photos;
    let targetPhoto;
    if (allPhotos) {
      allPhotos.map( (photo, i) => {
        if (i === this.state.imgIdx) {
          debugger
          targetPhoto = allPhotos[(i + 1) % allPhotos.length];
        }
        else {
          targetPhoto =  photo;
        }
      });
    }
    debugger
    this.setState({imgUrl: targetPhoto.image_url})
  }

  render() {
    let pics = [];
    let allPhotos = this.props.photos
    if (allPhotos) {
      allPhotos.map( (photo) => (
        pics.push(photo.image_url) : null
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
       >

        <h2 ref={subtitle => this.subtitle = subtitle}></h2>
        <img className="modal-pic" src={this.state.imgUrl} ></img>
        <button onClick={() => this.nextPic()}> > </button>
        <button onClick={this.closeModal}>close</button>

       </Modal>
     </div>
   );
 }
}

// <img className="modal-pic" src={pics[0]}/>
export default PicModal;
