import React, { Component } from 'react';

//input : liked : boolen
//output: onClick

class Like extends Component {
    render() { 
        let classes = "fa fa-heart";

        if (!this.props.liked) classes += "-0";
        return  <i onClick={this.props.onClick} style={{cursor: 'pointer'}} className={classes} aria-hidden="true"></i>;
    }
}
 
export default Like;