import Product from "../components/Product";
import ProductStyles from '../styles/Products.module.css'


export const getStaticProps = async () =>{
    const res = await fetch('http://localhost:3000/api/products');
    const products = await res.json();

    return {
        props: {
            products
        }
    }
}

const products = ({products}) => {
  return (
    <>
    <h1 style={{textAlign: 'center'}}>All Products</h1>
    <div className={ProductStyles.grid}>
        {products.map(product =>(
            <Product product={product}/>
        ))}
    </div>
    </>
  )
}

export default products