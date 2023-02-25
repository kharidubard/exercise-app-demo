import{ NavLink} from 'react-router-dom';
export default function Home() {
   return (
        
        <div className="home">
                    
            <p>(Select an exercise below)</p>
            
            <button><NavLink to="/duration/:name">Running</NavLink></button>
            <button><NavLink to="/repetition/:name">Pushups</NavLink></button>
        </div>
    )
}