import { useState } from "react";
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

let starIcon = contact.isFavorite ? starFilled : starEmpty

function star(props) {
    return(
        <button
            onClick={toggleFavorite}
            aria-pressed={false}
            className="favorite-button"
        >
        <img
            src={props.isFavorite ? starFilled : starEmpty}
            alt={"icône étoile vide"}
            className="favorite"
        />
        </button>
    )
} export default star