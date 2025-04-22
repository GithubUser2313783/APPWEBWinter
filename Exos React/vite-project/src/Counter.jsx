import './Counter.css'
import { useState } from "react"


export default function App() {

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)    
    }

    return (
        <main className="container">
            
            <h1>
                Combien de fois mon enseignant va-t-il dire le mot state dans ce chapitre ?
            </h1>
            
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">0</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}