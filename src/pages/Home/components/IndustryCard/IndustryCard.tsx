import React from "react"
import "./IndustryCard.scss"

function IndustryCard({ imgSrc, title, description }) {
    return(
        <div className="card">
            <div className="card__img-background">
                <img src={imgSrc} className="card__img"/>
            </div>
            <h4 className="card__title">{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default IndustryCard;