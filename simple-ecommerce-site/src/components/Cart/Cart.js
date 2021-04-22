import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    //const total=cart.reduce((total,prd)=> total+ prd.price, 0);
    let total=0;
    for(let i=0; i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;

    }


    let shipping=0;
    if(total< 35){
        shipping=10.00;
    }

    else if(total> 50){
        shipping=5.00;
    }

    const tax= total * 0.10;

    const formatNumber= num => {
        const precision= num.toFixed(2);
        return Number(precision)
    }

    let grossTotal= total + shipping + tax;
    grossTotal=formatNumber(grossTotal);


    return (
        <div>
            <h4>
                Order Summary

            </h4>
            <p>
                Items Ordered: {cart.length}
            </p>
            <p>
                Shipping Cost: {shipping}
            </p>

            <p>
                Total Tax: {tax}
            </p>

            <p>
                Total Price: {grossTotal}
            </p>

            
        </div>
    );
};

export default Cart;