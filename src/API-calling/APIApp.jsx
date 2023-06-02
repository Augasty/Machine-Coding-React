import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './APIApp.css'
import Loading from './Loading'

const APIApp = () => {

    const [dogUrl, setDogurl] = useState('')
    const [quote, setQuote] = useState('')
    const [trigger, setTrigger] = useState(false)
    const [load, setLoad] = useState(false)


    useEffect(() => {
        getUrl()

        return (() => cleanUp())
    }, [trigger])


    const cleanUp = () => {
        setQuote(null)
        setDogurl(null)
    }
    const getUrl = async () => {
        try {
            setLoad(true)
            axios.get(`https://dog.ceo/api/breeds/image/random`).then(res => setDogurl(res?.data?.message))
            const quoteFetch = await axios.get(`https://api.chucknorris.io/jokes/random`)
            setQuote(quoteFetch?.data?.value)
        }
        catch (err) {
            console.error(err)
        }
        finally {
            setLoad(false)
        }

    }
    return (
        <div className='APIApp'>
            {load && <Loading />}
            <img src={dogUrl} alt='dog photo' className='imageDog' />
            <div>{quote}</div>
            <button className='buttonclass' onClick={() => setTrigger(!trigger)}>Generate</button>
            <Link to="/">
                <button className='buttonclass' type="button">Back
                </button></Link>
        </div>
    )
}

export default APIApp