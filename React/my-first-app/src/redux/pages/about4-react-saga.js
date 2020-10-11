import React, { PureComponent } from "react";

import { subAction, FetchAboutMultidataAction } from "../store/actionCreators";
// import connect from "../utils/connect";

import { connect } from "react-redux";

class About extends PureComponent {
  componentDidMount() {
    this.props.getAboutMultidata();
  }

  render() {
    return (
      <div>
        <hr />
        <h2>About</h2>
        <h2>计数:{this.props.counter}</h2>
        <button
          onClick={(e) => {
            this.props.decrement();
          }}
        >
          -1
        </button>
        <button
          onClick={(e) => {
            this.props.dec_num(5);
          }}
        >
          -5
        </button>

        <h2>Banner------4</h2>
        <ul>
          {this.props.banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>

        <h2>Recommend-------4</h2>
        <ul>
          {this.props.recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decrement: function () {
      dispatch(subAction(1));
    },
    dec_num: function (num) {
      dispatch(subAction(num));
    },

    getAboutMultidata() {
      dispatch(FetchAboutMultidataAction);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
