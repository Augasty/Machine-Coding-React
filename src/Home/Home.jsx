import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>            
            <Link to="/file_structure">
                <button type="button">
                    File_structure
                </button></Link>
                <Link to="/api_calling">
                <button type="button">
                    API calling
                </button>

            </Link>

        </div>
    )
}

export default Home