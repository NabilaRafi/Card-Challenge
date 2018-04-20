import React from 'react';
import Style from './style.js'

export const SpecificationComponent = ({...props}) => {
    return (
        <div className="specification-component">
            {props.description ? 
                (<div>
                    <h5 style={Style.heading}>{props.heading}</h5>
                    <p style={Style.desc}>{props.description}</p>
                 </div>)
                : <h6 style={Style.heading}>{props.heading}</h6>
            }
        </div>         
    )
}