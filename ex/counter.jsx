import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { inc, dec, stepChanged } from './counterActions'

const Counter = props => {

    <div>
        <h1>{props.counter.number}</h1>
        <input type="number" value={props.counter.step} onChange={props.stepChanged} />
        <button onClick={props.inc}>+</button>
        <button onClick={props.dec}>-</button>
    </div>

}

mapStateToProps = (state) => {

    counter: state.counter

}

mapDispatchToProps = (dispatch) => bindActionCreators({

    inc, dec, stepChanged

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);