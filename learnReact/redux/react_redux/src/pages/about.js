import React, { PureComponent } from 'react'
// import { connect } from '../utils/connect2'
import {
  subAction,
  changeBannersAction,
  changeRecommendActon
} from '../store/actionCreator'

import { connect } from 'react-redux'
import axios from 'axios'

class About extends PureComponent {
  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then((res) => {
      const data = res.data.data
      this.props.changeBanner(data.banner.list)
      this.props.changeRecommend(data.recommend.list)
    })
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={() => this.props.decrement()}>-1</button>
        <button onClick={() => this.props.subNumber(5)}>-5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    decrement: () => {
      dispatch(subAction(1))
    },
    subNumber: (num) => {
      dispatch(subAction(num))
    },
    changeBanner: (banner) => {
      dispatch(changeBannersAction(banner))
    },
    changeRecommend: (recommend) => {
      dispatch(changeRecommendActon(recommend))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
