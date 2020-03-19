import React, {useState, useEffect} from 'react'
import axios from 'axios'

const EpisodeInfo = (props) => {

    const [epi, setEpi] = useState('')
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/${props.episode}`)
        .then(response => {
            // console.log(response);
            setEpi(response.data.name)
        })
        .catch(error => {
            console.log('Error in fetching episode', props.episode, error);
        })
    }, [])

    return <span> {epi} </span>
}

export default EpisodeInfo