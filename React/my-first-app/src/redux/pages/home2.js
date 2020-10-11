import React from "react";
// import connect from "../utils/connect";
import { connect } from "react-redux";

import { addAction } from "../store/actionCreators";

function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <h2>计数:{props.counter}</h2>
      <button
        onClick={(e) => {
          props.add();
        }}
      >
        +1
      </button>
      <button
        onClick={(e) => {
          props.add_num(5);
        }}
      >
        +5
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: function () {
      dispatch(addAction(1));
    },
    add_num: function (num) {
      dispatch(addAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
