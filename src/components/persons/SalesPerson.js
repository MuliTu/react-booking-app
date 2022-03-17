import { connect } from "react-redux";
import { _getEmployees } from "../../redux";
import { OutlinedInput, InputAdornment, Skeleton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import React, { Component } from "react";
import { Table } from "../table/Table";
import { columns } from "./helper";
import { getBooking } from "../../redux/globalReducer/actions";

class SalesPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.props.getBooking();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props._employees !== prevProps._employees) this.initState();
  }

  initState = () =>
    this.setState({
      data: this.props._employees,
    });

  onChange = (e) => {
    if (e.target.value.length <= 0) {
      this.initState();
    } else {
      const val = e.target.value.toLowerCase();
      const filteredList = this.props._employees.filter(
        (salesperson) =>
          salesperson.firstName.toLowerCase().includes(val) ||
          salesperson.lastName.toLowerCase().includes(val)
      );
      this.setState({
        data: filteredList,
      });
    }
  };

  render() {
    const { data } = this.state;
    if (this.props._employees.length <= 0)
      return <Skeleton className="state" variant="rectangular" height={300} />;
    return (
      <div className="flex-col-cen">
        <div className="input-style">
          <OutlinedInput
            onChange={this.onChange}
            startAdornment={
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            }
          />
        </div>
        <div>
          <Table data={data} columns={columns} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  _employees: _getEmployees(state),
});
export default connect(mapStateToProps, { getBooking })(SalesPerson);
