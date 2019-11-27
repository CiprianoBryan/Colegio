import React from 'react';
import './styles/Swipe.css';

function Swipe(props) {
    return (
        <div className="swipe">{
            props.images.map((image, i) => (
                <React.Fragment key={i}>

                    <input className="swipe-radio" type="radio" name="swipe-group1" id={"swipe-group1-item" + (i+1)} checked/>
                    <div className="swipe-item">
                        <div className="swipe-content">
                            <img src={require('../images/' + image)} alt="" width="290" height="380"/>
                        </div>
                        <div className="swipe-controller">
                            <label className="swipe-prev" htmlFor={"swipe-group1-item" + i}/>
                            <label className="swipe-next" htmlFor={"swipe-group1-item" + (i + 2)}/>
                        </div>
                    </div>

                </React.Fragment>
            ))
        }</div>
    );
}

export default Swipe;