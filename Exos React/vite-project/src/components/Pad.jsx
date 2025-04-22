import "./Pad.css"

export default function Pad(props) {
    
    return (
        <button style={{backgroundColor: props.color}}
            className={props.on ? "on" : ""}></button>
    )
}