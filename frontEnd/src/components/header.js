import '../styleSheets/header.css'
import React from 'react'
import { Link } from 'react-router-dom'
const header = () => {
    const styleText = {
        textDecoration: "none",
        width: "50px",
        color: "black",
        textAlign: "center",
        margin: "auto",
        height: "30px",
        backgroundColor: "white",
        fontWeight: "600"
    }
    return (
        <>
            {/* <h3>Header</h3> */}
            <nav>
                {/* <p>Its a nav bar</p> */}
                <div className="nav-container">
                    <Link to="/" style={styleText}>Home</Link>
                    <Link to="/about" style={styleText}>About</Link>
                </div>
            </nav>
        </>
    );
}
export default header;