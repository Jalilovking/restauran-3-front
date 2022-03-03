import './Basket.css';
import { useEffect, useState } from 'react';

function Basket(){

    console.log()

    const [ food, setFood ] = useState([])

    const increaseCart = productID => {
        console.log(productID)

        fetch('https://restauran-3.herokuapp.com/api/cart/', {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productID
            })
        })
    }

    const deleteCart = productID => {
        console.log(productID)

        fetch('https://restauran-3.herokuapp.com/api/cart/', {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productID
            })
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const { name, address, email } = e.target.elements

        fetch('https://restauran-3.herokuapp.com/api/order', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name.value,
                address: address.value,
                email: email.value
            })
        })

    }

    useEffect(() => {
        fetch('https://restauran-3.herokuapp.com/api/cart/')
        .then(res => res.json())
        .then(data => setFood(data))
        .catch(error => console.log(error))
    }, [deleteCart, increaseCart])


    // useEffect(() => {

    // })


    return(
        <>
            <h1>Basket</h1>

            <div className="basket_product">
                <ul>
                    {
                        food && food.map((e, i) => {
                            return(
                                <li key={i}>
                                    <img src={e.food_img} alt={`${e.food_name} img`} />
                                    <h3>{e.food_name}</h3>
                                    <h4>{e.food_price}</h4>
                                    <h4>{e.count} ta</h4>
                                    <button onClick={() => deleteCart(e.cart_id)}>Delete</button>
                                    <button onClick={() => increaseCart(e.cart_id)}> +1 </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>


            <form onSubmit={handleSubmit}>
                <input type="text" name='name' id='name' placeholder='Ism Familiyangizni kiriting'/>
                <input type="text" name='address' id='address' placeholder='Manzilingzini kiriting'/>
                <input type="email" name='email' id='email' placeholder='Emailingizni kiriting'/>
                <button>Buyurtma berish</button>
            </form>
        </>
    )
}

export default Basket;