import { useState } from 'react'
import './Header.css'

function Header() {
    const [count, setCount] = useState(0)

    const name = "Alice";

    return (
      <>
        <header>
            <img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Ninja Octocat" />
            <h1>Entrez, et bienvenue sur ma page</h1>
        </header>
      </>
    )
} export default Header