import { useState } from "react"
import { NavLink } from "react-router-dom"


export default function RepetitionExercise(){
    const [count, setCount] = useState(0)

    return (
        <div>
            
            <p>Repetition Exercise</p>
            <p>Reps:{count}</p>
            <button onClick={() => setCount(count + 1)}>Complete Rep</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button><NavLink to="/">Return</NavLink></button>
        </div>
    )
}
// made timer with help from this video: https://www.youtube.com/watch?v=sSWGdj8a5Fs