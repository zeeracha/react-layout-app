
const CartItems = (props) => {

    // console.log(props.product);

    // Object destructuring
    const {imgUrl, name, price, qty} = props.product


  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={imgUrl} className="card-img-top" alt="" style={{height: '25rem'}}/>
        <div className="card-body">
            <p className="card-text">{name}</p>
            <p className="card-text">{price} THB</p>
            <p className="card-text">{qty} items</p>
        </div>
    </div>

  )
}

export default CartItems