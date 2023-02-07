import CartItems from "./CartItems"

const products = [
    {
        imgUrl: 'https://i.pinimg.com/564x/5e/91/00/5e910019e656ead3204920ae303372ea.jpg',
        name: 'Banana',
        price: 60,
        qty: 3
    },
    {
        imgUrl: 'https://i.pinimg.com/564x/89/e5/0f/89e50f47f021f29d703e1306a2f8c8bc.jpg',
        name: 'Carot',
        price: 10,
        qty: 34
    },
    {
        imgUrl: 'https://i.pinimg.com/564x/a2/e9/1e/a2e91e45abb78da3fcacc758c05c60a9.jpg',
        name: 'Cucumber',
        price: 5,
        qty: 25
    },
    {
        imgUrl: 'https://i.pinimg.com/564x/95/37/4e/95374e861bfed7daf0d0358a809967ec.jpg',
        name: 'Tomato',
        price: 10,
        qty: 16
    },
    {
        imgUrl: 'https://i.pinimg.com/564x/d7/09/cd/d709cd52949d53c2e0f0e49e51d84419.jpg',
        name: 'Lemon',
        price: 80,
        qty: 9
    },
    {
        imgUrl: 'https://i.pinimg.com/564x/a8/1c/5d/a81c5d520780faf1fe8f55184b1a35a1.jpg',
        name: 'Strawberry',
        price: 110,
        qty: 88
    }
]

const Cart = () => {
  return (
    <div className="container">
        <div className="row">
            {
                products.map((product, index) => {
                    return(
                        <div className="col-md-4 my-3" key={index}>
                            <CartItems product={product}/>
                            {/* <CartItems imgUrl={product.imgUrl} name={product.name} price={product.price} qty={product.qty} /> */}
                            {/* <CartItems name="Apple" price="15" qty="2"/> */}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Cart