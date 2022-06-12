import ProductStyles from '../styles/Products.module.css'

const Product = ({product}) => {
  return (
    <div className={ProductStyles.card}>
        <img src={product.image} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>{product.price}</span>
        <button>Add To Cart</button>
    </div>
  )
}

export default Product