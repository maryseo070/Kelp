import React from 'react';
import IndexHeader from './index_header.jsx';
import ReefIndexItem from './reef_index_item';
import ReefMap from '../reef_map/reef_map';

class ReefIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // debugger
    // console.log(this.props.reefs)
    if (!this.props.reefs) {
      this.props.fetchReefs();
    }
    if (this.props.reefs) {
      // console.log(this.props.fetchReefs())
      // this.props.reefs.map( (reef) => this.props.fetchReef(reef.id));
      return this.props.reefs;
    }


  }


  // componentWillUnmount() {
  //   this.props.fetchReefs()
  //   console.log("UNMOUNTED!!!!!")
  // }

  // componentWillReceiveProps(nextProps){
  //   console.log(this.props)
  //   console.log(nextProps)
  // }


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
