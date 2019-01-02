import React from 'react';

const Person = (props) => {
    return ( <div>
        <p onClick={props.click}>I'm just a {props.name} and I'm {props.age}. I'll say it again loud and clear - {props.children}</p>
        <input onChange={props.change} defaultValue={props.name}  />
        </div> );
}
 
export default Person;