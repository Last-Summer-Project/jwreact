import React, { Component } from 'react';

class BlackCom extends Component
{
    render(props){
        return(
            <button type="button" className="btn bg-gradient-dark w-100 my-4 mb-2 test1" style={{fontSize: 20}}>{props.name}</button>
        )
    }
}



export default BlackCom;