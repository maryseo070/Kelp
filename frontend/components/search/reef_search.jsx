import * as ReefApiUtil from '../../util/reef_api_util.js';
import React from 'react';
import {withRouter} from 'react-router-dom';

class ReefSearch extends React.Component {
  constructor(el) {
    super();
    this.state = {
      name: '',
      rating: '',
      continent: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.reefs.push(this.props.searchReefs(this.state))
    this.props.searchReefs(this.state).then(
      () =>  this.props.history.push('/reefs'))

  }

  renderResults(reefs) {
  }

  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="show-form">
          <input onChange={this.handleInput("name")} type="text" className="show-input" placeholder="Find Coral Reefs"></input>
          <input onChange={this.handleInput("continent")}type="text" className="show-input" placeholder="Near..."></input>
          <input type="submit" value="search" className="show-submit"/>
        </form>
      </div>

    );
  }
}
export default withRouter(ReefSearch);
