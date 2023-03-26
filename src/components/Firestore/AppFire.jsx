import React, { useEffect, useState } from 'react'

import { doc, getDoc, getDocs, getFirestore, collection, query, where, limit } from 'firebase/firestore'

const AppFire = () => {

    const [items, setItems] = useState()

    // Obtener 1 documento específico.
    useEffect(() => {

        const db = getFirestore()

        const djRef = doc(db, 'items', 'MJFBqjzkK8bTRkeMukyU')
        getDoc(djRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItems({ id: snapshot.id, ...snapshot.data() })
            }
        })
    }, [])

    // Obtener todos los documentos sin filtros.
    useEffect(() => {
        const db = getFirestore()
        const djRefCollection = collection(db, 'items')

        getDocs(djRefCollection).then((snapshot) => {
            if (snapshot === 0) {
                console.log("No hay resultados")
            }
            setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })

    }, [])


    useEffect(() => {
        const db = getFirestore()

        const q = query(
            collection(db, 'items'),
            where('price', '>=', 150),
            limit(1)
        )

        getDocs(q).then((snapshot) => {
            if (snapshot === 0) {
                console.log("No hay resultados")
            }
            setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
    }, [])

    return (
        <div>
            {items &&
                <>
                    <img src={items.imageId} />
                    <h4>{items.title}</h4>
                    <p>{items.description}</p>
                    <p>Stock: {items.stock}. Precio: {items.price}</p>
                </>
            }
        </div>
    )
}

export default AppFire