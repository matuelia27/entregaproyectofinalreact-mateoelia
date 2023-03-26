import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const OrderForm = ({ items }) => {


    const [buyerName, setBuyerName] = useState('');
    const [buyerPhone, setBuyerPhone] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [total, setTotal] = useState(0);



    const db = getFirestore();



    const handleSubmit = (e) => {

        e.preventDefault();

        const order = {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            items: selectedItems,
            total: total
        };

        addDoc(ordersCollection, order)
            .then((docRef) => {
                console.log('Documento enviado. ID:', docRef.id);
                alert('¡Compra realizada con éxito!');
                resetForm();
            })
            .catch((e) => {
                console.log('Error al agregar el documento', e);
            });
    };


    const handleSelectItem = (item) => {

        const isSelected = selectedItems.includes(item);

        if (!isSelected) {
            setSelectedItems([...selectedItems, item]);
            setTotal(total + item.price);
        } else {

            const updatedSelectedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
            setSelectedItems(updatedSelectedItems);
            setTotal(total - item.price);
        }
    };


    const resetForm = () => {
        setBuyerName('');
        setBuyerPhone('');
        setBuyerEmail('');
        setSelectedItems([]);
        setTotal(0);
    };

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
                </label>
                <br />
                <label>
                    Teléfono:
                    <input type="text" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} />
                </label>
                <br />

                <h3>Seleccione los productos que desea comprar:</h3>

                {items.map((item) => (
                    <div key={item.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
                                onChange={() => handleSelectItem(item)} />
                            {item.title} - ${item.price}
                        </label>
                    </div>
                ))}

                <br />

                <h3>Total: ${total}</h3>
                <button type="submit" className="btn btn-primary">Realizar compra</button>

            </form>
        </div>
    );
};

export default OrderForm;