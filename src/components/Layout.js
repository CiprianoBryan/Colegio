import React from 'react';
import Bar from './Bar';

function Layout(props) {
    return (
        <React.Fragment>
            <Bar/>
            {props.children}
        </React.Fragment>
    );
}

export default Layout;