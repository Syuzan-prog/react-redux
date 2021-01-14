import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  CgangeFirstName,
  CgangeLastName,
  ChangeInc,
  ChangeDec,
} from "./store/actions";

class App extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      count,
      CgangeFirstName,
      CgangeLastName,
      ChangeInc,
      ChangeDec,
    } = this.props;

    return (
      <div className="container mt-5 form-group">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => CgangeFirstName(event.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => CgangeLastName(event.target.value)}
            />
            <div className="pt-2">
              <h3>{`${firstName} ${lastName}`}</h3>
            </div>
          </div>

          <div className="col-6">
            <h2>Counter</h2>
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={() => ChangeInc(count)}
            >
              +
            </button>

            <span> {count} </span>

            <button
              type="button"
              className="btn btn-primary ml-3"
              onClick={() => ChangeDec(count)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const putStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    count: state.count,
  };
};

const putActionsToProps = (dispatch) => {
  return {
    CgangeFirstName: bindActionCreators(CgangeFirstName, dispatch),
    CgangeLastName: bindActionCreators(CgangeLastName, dispatch),
    ChangeInc: bindActionCreators(ChangeInc, dispatch),
    ChangeDec: bindActionCreators(ChangeDec, dispatch),
  };
};

export default connect(putStateToProps, putActionsToProps)(App);
