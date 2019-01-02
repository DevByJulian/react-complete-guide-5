import React from 'react';
import Radium from'radium';

import './Person.css';

const Person = (props) => {
    const styles = {
        '@media (min-width: 500px)': {
    width: '450px'
        }
    }
    return ( <div className='Person' >
        <p onClick={props.click}>I'm just a {props.name} and I'm {props.age}. I'll say it again loud and clear - {props.children}</p>
        <input onChange={props.change} defaultValue={props.name}  />
        </div> );
}
 
export default Radium(Person);