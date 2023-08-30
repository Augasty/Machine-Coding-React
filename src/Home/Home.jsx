import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/file-structure">
                <button type="button">
                    File_structure
                </button></Link>
            <Link to="/api-calling">
                <button type="button">
                    API calling
                </button>
            </Link>

            <Link to="/debounce-search">
                <button type="button">
                    Debounce search
                </button>
            </Link>            
            <Link to="/star-rating">
                <button type="button">
                    Star rating
                </button>
            </Link>
            <Link to="/modal">
                <button type="button">
                    Goto Modal
                </button>
            </Link>
            <Link to="/forms">
                <button type="button">
                    Forms
                </button>
            </Link>
        </div>
    )
}

export default Home