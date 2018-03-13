import React from 'react';
import { withRouter } from 'react-router-dom';
import ReefShowContainer from '../reef_show/reef_show_container';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const reefId = this.props.reef.id;
    this.props.history.push(`/reefs/${reefId}`);
  }

  render() {
    const { name, lat, lng } = this.props.reef;
    return (
      <div
        className="reef-index-item"
        onClick={this.handleClick}
      >

      </div>
    );
  }
}

export default withRouter(IndexItem);
