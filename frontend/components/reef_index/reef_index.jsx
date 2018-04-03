import React from 'react';
import IndexHeader from './index_header.jsx';
import ReefIndexItem from './reef_index_item';
import ReefMap from '../reef_map/reef_map';

class ReefIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (this.props.reefs.length < 1) {
      this.props.fetchReefs();
    }
    if (this.props.reefs) {
      return this.props.reefs;
    }
    this.props.fetchReefs();
  }

  render() {
    let indexInfo;
    if (this.props.reefs) {
      indexInfo = this.props.reefs.map( (reef) => (
      <ReefIndexItem key={reef.id} reef={reef}/>));
    }

    return (
      <div className="reef-index">
        <IndexHeader />
          <div className="items-and-map">
            <div className="reef-index-items">
              {indexInfo}
            </div>
            <div className="reef-map-index">
              <ReefMap reefs={this.props.reefs} singleReef={false}/>
            </div>
        </div>

      </div>
    );
  }
}

export default ReefIndex;
// <ReefIndexItem key={reef.id} reef={reef}/>
