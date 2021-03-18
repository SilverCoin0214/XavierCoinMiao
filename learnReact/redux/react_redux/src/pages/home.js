import React from 'react'
// import { connect } from '../utils/connect'
import { connect } from 'react-redux'

import { addAction } from '../store/actionCreator'

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <h2>当前计数: {props.counter} </h2>
      <button onClick={() => props.increment()}>+1</button>
      <button onClick={() => props.addNumber(5)}>+5</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: function () {
      dispatch(addAction(1))
    },
    addNumber: function (num) {
      dispatch(addAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
