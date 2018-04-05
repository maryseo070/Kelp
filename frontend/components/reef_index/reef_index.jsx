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
              <div className="links-sticky">
              <ReefMap reefs={this.props.reefs} singleReef={false}/>
                <div className="conservation-links">
                  <p className="link-description">Want to learn how to help conserve Coral Reefs? Follow the links below</p>
                  <a className="below-map-links" href="https://www.nature.org/ourinitiatives/urgentissues/oceans/coral-reefs/ways-to-help-coral-reefs/index.htm" target="_blank">The Nature Conservancy: 10 Steps to Help Protect Coral Reefs</a>
                  <br></br>
                  <a className="below-map-links" href="https://oceanservice.noaa.gov/facts/thingsyoucando.html" target="_blank">National Ocean Service</a>
                </div>
              </div>
            </div>
        </div>

      </div>
    );
  }
}

export default ReefIndex;
// <ReefIndexItem key={reef.id} reef={reef}/>
