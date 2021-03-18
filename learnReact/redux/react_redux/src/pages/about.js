import React, { PureComponent } from 'react'
// import { connect } from '../utils/connect2'
import { subAction } from '../store/actionCreator'

import { connect } from 'react-redux'

class About extends PureComponent {
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
