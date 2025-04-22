import  {useState} from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

    // let text = isShown ? "hide" : "hide"

    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
            <hr/>
        </div>
    )
}