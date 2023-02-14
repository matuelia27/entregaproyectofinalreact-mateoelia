import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../Navbar/Navbar'

const Landing = () => {

    return (
        <>
            <Navbar />
            <div>
                <ItemListContainer greeting="bienvenidos a mi tienda online" />
            </div>
        </>
    )
}

export default Landing