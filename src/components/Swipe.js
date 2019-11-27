import React from 'react';
import './styles/Swipe.css';

function Swipe(props) {
    return (
        <div className="swipe">
            <input className="swipe-radio" type="radio" name="swipe-group1" id="swipe-group1-item1" checked/>
            <div className="swipe-item">
                <div className="swipe-content">
                    <img src="https://goo.gl/ic3QpO" alt="" width="290" height="380"/>
                </div>
                <div className="swipe-controller">
                    <label className="swipe-prev" for="swipe-group1-item0" onClick=""/>
                    <label className="swipe-next" for="swipe-group1-item2" onClick=""/>
                </div>
            </div>

            <input className="swipe-radio" type="radio" name="swipe-group1" id="swipe-group1-item2" checked/>
            <div className="swipe-item">
                <div className="swipe-content">
                    <a href="https://www.pcworld.co.uk" target="_blank"/>
                    <img src="https://goo.gl/Be1Th9" alt="" width="290" height="380"/>
                </div>
                <div className="swipe-controller">
                    <label class="swipe-prev" for="swipe-group1-item1" onclick=""/>
                    <label class="swipe-next" for="swipe-group1-item3" onclick=""/>
                </div>
            </div>

            <input className="swipe-radio" type="radio" name="swipe-group1" id="swipe-group1-item3" checked/>
            <div className="swipe-item">
                <div className="swipe-content">
                    <a href="https://www.currys.co.uk" target="_blank"/>
                    <img src="https://goo.gl/XESf8M" alt="" width="290" height="380"/>
                </div>
                <div className="swipe-controller">
                    <label class="swipe-prev" for="swipe-group1-item2" onclick=""/>
                    <label class="swipe-next" for="swipe-group1-item4" onclick=""/>
                </div>
            </div>

        </div>
    );
}

export default Swipe;