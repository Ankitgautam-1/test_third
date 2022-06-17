import React from 'react'
import "./Creative.scss"
import RightImage from "../../assets/images/right.png";
const Creative = () => {
    return (
    <div className='creative_container'>
        <div className="left_side">
            <div className="overline">
                Overline
            </div>
            <div className='heading'>
            Sapien ipsum scelerisque convallis fusce
            </div >
            <div className='paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor voluptatum quidem id praesentium hic nisi.</div>
            <div className='buttons'>
                <button className='get_started'>Get Started</button>
                <button className='learn_more'>Learn more</button>
            </div>
        </div>
        <div className="right_side">
            <img src={RightImage} width={616} alt="RightImages" />
        </div>
    </div>
    )
}

export default Creative