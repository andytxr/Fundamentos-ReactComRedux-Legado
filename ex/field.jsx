import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeField } from '../actions/field';

class Field extends Component {

    render(){

        return(

            <div>
                <label>{this.props.value}</label>
                <input type="text" value={this.props.value} onChange={this.props.changeField} />
            </div>

        )

    }

}

const mapStateToProps = (state) => {

    return{

        value: state.field.value

    }

}

const mapDispatchToProps = (dispatch) => bindActionCreators({

    changeField

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Field)