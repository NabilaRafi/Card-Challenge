import React from 'react';
import StarRatingComponent from 'react-star-rating-component'
import Style from './style.js'

export const RatingComponent = ({...props}) => {
    return (
        <div style={Object.assign({},Style.container, props.style)} className="rating-component">
            <StarRatingComponent
                name="rate1" 
                starCount={5}
                value={4}
            />
            <span style={Style.reviews}>10 reviews</span>
        </div>
    )
}