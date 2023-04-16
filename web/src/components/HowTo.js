import React from 'react';
import "./HowTo.css"
import "./Homepage.css"
import "./crab.css"

const NewPage = () => {
    return (
        <div className='main'>
            <div className="sea"></div>
            <div className="crab">
                <img src={require('./images/transparent.png')}></img>
            </div>
            <div className='containerNew'>

                <h1 className="pressedNew">How To Crab!</h1>
                <div className='AnimatedBground'>
                    <h1 className="pressed">What you need:</h1>
                </div>
                <div className="ul"><span className="strike">Bucket</span></div>
                <div><span className="strike2">Crab line, with bait net and weight</span></div>
                <div><span className="strike3">Bait - they like smokey bacon</span></div>
                <div><span className="strike4">Find a quay or pier near you</span></div>

                <div className="AnimatedBground">
                    <h1 className="pressed">Did you know...</h1>
                    <ul className="">
                        <li>The biggest crab in the seas around Britian is called a Brown Crab</li>
                        <li>Brown crabs have eight legs and two snippy claws</li>
                        <li>As their claws are so big, if you were nipped by a crab it would hurt!</li>
                        <li>If a fisherman catches a crab with shell smaller than 13 cm wide they are too young and should be returned to the sea</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
export default NewPage;