import React from 'react'
import Style from './style.js'

export const PricingComponent = ({...props}) => {
    return (
        <div style={Style.container} className="pricing-component">
            {props.ratings && <p style={Style.para}>{props.ratings}</p>}
            <h4 style={Style.header}>{props.price} <span>avg/night</span></h4>
        </div>        
    )
}