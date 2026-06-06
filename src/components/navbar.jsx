import { NavLink } from "react-router-dom";


function Navbar({ onLogout }) {
    return (
        <header className="navbar">
            <div>
                <h2>Library Management</h2>
                
            </div>
            <nav>
                <NavLink to = "/dashboard">Home</NavLink>
                <NavLink to = "/dashboard/books">Books</NavLink>
                <NavLink to = "/dashboard/add-book">Add Book</NavLink>
                <button onClick={onLogout} className="logout-btn">Logout</button>

            </nav>
            </header>
    );        
}
    export default Navbar;