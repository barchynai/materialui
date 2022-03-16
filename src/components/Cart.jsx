function Cart({cart}){
    return (<><h1>Checkout</h1>
        {cart.map((element) => {
            return (<p>{element.title} QTT = {element.quantity} price {element.price}</p>)
        })}
        </>)
}

export default Cart