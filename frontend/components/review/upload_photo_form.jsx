import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class UploadPhotoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      caption: ""
    }
    this.updateCaption = this.updateCaption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    this.props.fetchReef(this.props.match.params.reefId);
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = new FormData();
    photo.append("photo[caption]", this.state.caption);
    this.props.createPhoto().then( () => this.props.history.push(`/reefs/${this.props.reef.id}`))
  }

  updateCaption(e) {
    this.setState({caption: e.target.value});
  }

  updateFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  render () {
    return (
      <div>
        <form>
          <textarea value={this.state.caption} onChange={ () => this.updateCaption() }></textarea>
          <input type="file" onChange={this.updateFile}></input>
          <input type="submit" value="Upload Photo"></input>
        </form>
      </div>
    );
  }
}

export default UploadPhotoForm;
