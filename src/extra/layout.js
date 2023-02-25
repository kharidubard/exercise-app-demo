import{ Outlet } from 'react-router-dom';

export default function layout() {
    return(
        <div className="layout">
            <header>
                <nav>
                    <h1>SwiftFIT</h1>
                   
                </nav>
                
            </header>
            
            <main>
                <Outlet />
            </main>
        </div>
    );

}