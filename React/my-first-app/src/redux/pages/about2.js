import React, { PureComponent } from "react";

import {
  subAction,
  changeBannerAction,
  changeRecommendAction,
} from "../store/actionCreators";
// import connect from "../utils/connect";

import { connect } from "react-redux";

import axios from "axios";

class About extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then((res) => {
      // console.log(res);
      const data = res.data.data;
      // console.log("轮播图:", data.banner.list);
      // console.log("推荐:", data.recommend.list);

      this.props.changeBanners(data.banner.list);
      this.props.changeRecommend(data.recommend.list);
    });
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

        <h2>Banner</h2>
        <ul>
          {this.props.banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>

        <h2>Recommend</h2>
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
    changeBanners: function (banner) {
      dispatch(changeBannerAction(banner));
    },
    changeRecommend: function (recommend) {
      dispatch(changeRecommendAction(recommend));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
