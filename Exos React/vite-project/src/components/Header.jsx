import { useState } from "react"
import avatar from "../icons/user.png"

export default function Header() {

    return (
        <header>
            <img src={avatar} />
            <p>{userName}</p>
        </header>
    )
}