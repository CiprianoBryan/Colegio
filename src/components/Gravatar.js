import React from 'react';
import md5 from 'md5';

function Gravatar(props) {
    const hash = md5(props.id);
    return (
        <img
            className={props.className} 
            src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
            alt={props.alt}/>
    );
}

export default Gravatar;