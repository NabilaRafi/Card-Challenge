import React from 'react'
import { SpecificationComponent } from './../SpecificationComponent'
import { RatingComponent } from './../RatingComponent'
import { PricingComponent } from './../PricingComponent'
import Style from './style.js'


export const CardComponentMobile = ({...props}) => {
    return (
        <div style={Style.container} className="card-component-mobile">
            <img src={props.src} alt={props.alt} style={Style.image}/>
            <PricingComponent price='$864'/>
            <div className="specification-mobile-div">
                <SpecificationComponent heading='2 Beds' />
                <SpecificationComponent heading='3.5 Bathrooms' />
                <SpecificationComponent heading='Sleeps 6' />

            </div>
            <div style={{display: 'inline-block'}}>
               <RatingComponent style={{float: 'left'}}/>               
            </div>
        </div>
    )
}