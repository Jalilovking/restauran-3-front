
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Restauran.css';

function Restauran(){


    let { catagoryID} = useParams()

    const [ state, setState ] = useState()
    const [ limit, setLimit ] = useState(catagoryID)
    const [ restauran, setRestauran ] = useState()

    useEffect(() => {
        fetch('https://restauran-3.herokuapp.com/api/')
        .then(res => res.json())
        .then(data => setState(data))
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetch(`https://restauran-3.herokuapp.com/api/catagory/${limit}`)
        .then(res => res.json())
        .then(data => setRestauran(data))
        .catch(error => console.log(error))
    }, [limit])

    const handleChange = e => {
        setLimit(parseInt(e.target.value))
        console.log(e.target.value)
      }

    return(
        <>
            < Header/>

            <h1>Restauran</h1>
            
                <select onChange={handleChange} name="catagory" id="catagory">

                    {
                        state && state.map((e, i) => {
                            return(
                                <option key={i} value={e.catagory_id}>{e.catagory_name}</option>
                            )
                        })
                    }
                </select>


            <ul>
                {
                    restauran && restauran.map((e, i) => {
                        return(
                            <li key={i}>
                                <img src={e.restauran_img} alt="img" />
                                <Link to={`/sub_catagory/${e.restauran_id}`}>{e.restauran_name}</Link>
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default Restauran;