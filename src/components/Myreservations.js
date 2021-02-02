import React, { useState, Component } from 'react';
import MyresvtBody from './MyresvtBody';
import FilterValues from './FilterValues';

class Myreservations extends Component{
    render(){
    return(
        <>
            <div>
                <FilterValues />
            </div>
    
            <div>
           
                <MyresvtBody />
            </div>
  
        </>
    );
}
}

export default Myreservations;