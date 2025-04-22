    // import Joke from "./components/Joke"
    // import jokesData from "/src/assets/jokesData"

    // export default function App() {
    //     const jokeElements = jokesData.map(joke => {
    //         return (
    //             <Joke 
    //                 key={joke.id}
    //                 setup={joke.question} 
    //                 punchline={joke.punchline} 
    //             />
    //         )
    //     })
    //     return (
    //         <div>
    //             {jokeElements}
    //         </div>
    //     )
    // }

        // import { useState } from "react"
        // import Header from "./components/Header"
        // import Body from "./components/Body"
        // import './App.css'
        
        // export default function App() {

        //     const [userName, setUserName] = useState("John")

        //         return (
        //             <main>
        //                 <Header userName = {userName}/>
        //                 <Body userName = {userName}/>
        //             </main>
        //         )
        // }

    // import React from "react"
    // import Pad from "./components/Pad"

    // export default function App() {
    //     const [pads, setPads] = useState(padsData)

    //     const buttonElements = pads.map(pad => (
    //         <Pad key={pad.id} color={pad.color} on={pad.on}/>
    //     ))
        
    //     return (
    //         <main>
    //             <div className="pad-container">
    //                 {buttonElements}
    //             </div>
    //         </main>
    //     )
    // }

    // import { useState } from "react"
    // import React from "react"
    // import Pad from "./components/Pad"

    // export default function App() {
    //     const [pads, setPads] = useState(padsData)
        
    //     function toggle(id) {
    //         setPads(prevPads => prevPads.map(item => {
    //             return item.id === id ? {...item, on: !item.on} : item
    //         }))
    //     }
        
    //     const buttonElements = pads.map(pad => (
    //         <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
    //     ))
        
    //     return (
    //         <main>
    //             <div className="pad-container">
    //                 {buttonElements}
    //             </div>
    //         </main>
    //     )
    // }

    // import React from "react"

    // export default function App() {
    //     const [pokemonData, setPokemonData] = React.useState({})
    //     const [count, setCount] = React.useState(1)

    //     React.useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
    //         .then(res => res.json())
    //         .then(data => setPokemonData(data))
    //     }, [count])

    //     return (
    //     <div>
    //         <h2>Le numéro est {count}</h2>
    //         <button onClick={() => setCount(prev => prev + 1)}>Afficher le prochain Pokémon</button>
    //         <button onClick={() => setCount(prev => prev - 1)}>Afficher le Pokémon antérieur</button>
    //         <pre>{JSON.stringify(pokemonData, null, 2)}</pre>
    //     </div>
    //     )
    // }

    import React from "react"

    export default function App() {
      const [pokemonData, setPokemonData] = React.useState(null)
      const [count, setCount] = React.useState(1)
      const [searchName, setSearchName] = React.useState("")
    
      React.useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
          .then(res => res.json())
          .then(data => setPokemonData(data))
      }, [count])
    
      function handleSearch(e) {
        e.preventDefault()
        if (searchName.trim() === "") return
    
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchName}`)
          .then(res => {
            if (!res.ok) throw new Error("pokemon not found")
            return res.json()
          })
          .then(data => {
            setPokemonData(data)
            setCount(data.id)
          })
          .catch(() => alert("pokemon not found"))
      }
    
      return (
        <div style={{ textAlign: "center" }}>
          <h2>Number : {count}</h2>
          <button onClick={() => setCount(prev => prev + 1)}>
            Afficher le prochain Pokémon
          </button>
    
          <form onSubmit={handleSearch} style={{ marginTop: "1" }}>
            <input
              type="text"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="Pokemon Name"
            />
            <button type="submit">Search</button>
          </form>
    
          {pokemonData && (
            <div style={{ marginTop: "1" }}>
              <h3>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h3>
              <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            </div>
          )}
        </div>
      )
    }

// <div>
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" alt="gengar" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png" alt="sableye" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png" alt="groudon" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png" alt="gardevoir" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png" alt="" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png" alt="" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png" alt="" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png" alt="" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png" alt="" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png" alt="" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="" />
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png" alt="" />
// </div>