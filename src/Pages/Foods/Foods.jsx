import './Foods.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Foods(){

    let { restauranID } = useParams()
    console.log(restauranID)

    const [ limit, setLimit ] = useState(restauranID)
    const [ food, setFood ] = useState([])


    useEffect(() => {
        fetch(`https://restauran-3.herokuapp.com/api/sub_catagory/${limit}`)
        .then(res => res.json())
        .then(data => setFood(data))
        .catch(error => console.log(error))
    }, [limit])

    const handleCart = productID => {
        console.log(productID)

        fetch('https://restauran-3.herokuapp.com/api/cart/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productID
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
    
    return(

        <>
            <h1>Foods</h1>

            <ul>
                {
                    food && food.map((e, i) => {
                        return(
                            <li key={i}>
                                <img src={e.food_img} alt={`${e.food_name} img`} />
                                <h3>{e.food_name}</h3>
                                <h4>{e.food_price}</h4>
                                <button onClick={() => handleCart(e.food_id)}>Add Cart</button>
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default Foods;