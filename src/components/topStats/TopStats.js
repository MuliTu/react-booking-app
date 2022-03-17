import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider, Skeleton } from "@mui/material";
import State from "./State";
import { getHotelsReport } from "../../redux/globalReducer/actions";
import { _getHotelsReport } from "../../redux";

class TopStats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getHotelsReport();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps._hotelReport !== this.props._hotelReport) this.initState();
  }

  initState = () =>
    this.setState({
      ...this.props._hotelReport,
    });

  render() {
    const list = Object.entries(this.state || {});
    return (
      <>
        <div className="flex se">
          {list.length > 0 ? (
            list.map((element, idx) => (
              <State title={element[0]} value={element[1]} key={idx} />
            ))
          ) : (
            <>
              <Skeleton className="state" variant="rectangular" height={125} />
              <Skeleton className="state" variant="rectangular" height={125} />
              <Skeleton className="state" variant="rectangular" height={125} />
              <Skeleton className="state" variant="rectangular" height={125} />
            </>
          )}
        </div>
        <Divider variant="middle" />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  _hotelReport: _getHotelsReport(state),
});
export default connect(mapStateToProps, { getHotelsReport })(TopStats);
