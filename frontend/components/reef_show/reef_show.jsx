import React from 'react';
import {Link} from 'react-router-dom';
import ReefShowItem from './reef_show_item';
import IndexHeader from '../reef_index/index_header.jsx';

class ReefShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReef(this.props.match.params.reefId);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if (this.props.match.params.reefId !== nextProps.match.params.reefId) {
      this.props.fetchReef(nextProps.match.params.reefId);
    }
  }
  // componentDidUpdate () {
  //   console.log(this.props)
  // }

  // if (this.props.reef === undefined) {
  //   return(
  //     <div>Loading...</div>
  //   );
  // }
  render () {
    // debugger
    let reefShowItem;
    let reviews;
    if (this.props.reef[0] !== undefined) {
      reviews = Object.values(this.props.reviews);
      reefShowItem = <ReefShowItem authors={this.props.authors} reefId={this.props.match.params.reefId} reef={this.props.reef} reviews={this.props.reviews} />;
    }
    else {
      reefShowItem = "";
    }

    return (
      <div>
        <IndexHeader />
        <div>
          {reefShowItem}
        </div>

      </div>

    );
  }
}

export default ReefShow;
