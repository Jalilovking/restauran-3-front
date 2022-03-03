import Header from '../../Components/Header/Header';
import './Home.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Home(){

    const [ state, setState ] = useState([])
    const [ limit, setLimit ] = useState()

    useEffect(() => {
        fetch('https://restauran-3.herokuapp.com/api/')
        .then(res => res.json())
        .then(data => setState(data))
        .catch(error => console.log(error))
    }, [])


    return(
        <>
            <Header/>

            <ul>
                    {
                        state && state.map((e, i) => {
                            return(
                                <li key={i}><Link to={`catagory/${e.catagory_id}`}>{e.catagory_name}</Link></li>
                            )
                        })
                    }
                </ul>
        </>
    )
}

export default Home;