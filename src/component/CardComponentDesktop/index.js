import React from 'react'
import { SpecificationComponent } from './../SpecificationComponent'
import { RatingComponent } from './../RatingComponent'
import { PricingComponent } from './../PricingComponent'
import Style from './style.js'

export const CardComponentDesktop = ({...props}) => {
    return (
        <div style={Style.container} className="card-component-desktop">
            <img src={props.src} alt={props.alt} style={Style.image}/>
                <h4 style={Style.heading}>{props.heading}</h4>
            <div className="specification-div">
                <SpecificationComponent heading='Sleeps' description='6' />
                <SpecificationComponent heading='Bedrooms' description='3' />
                <SpecificationComponent heading='Bathrooms' description='3.5'/> 
            </div>
            <div>
                <PricingComponent  ratings='Wonderful 4.9/5' price='$864'/>
                <RatingComponent  style={{float: 'right'}}/>               
            </div>
        </div>
    )
}