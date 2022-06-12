import ShowcaseStyling from '../styles/Showcase.module.css'
import Link from 'next/link'


const Showcase = () => {
  return (
    <div className={ShowcaseStyling.hero}>
        <h1>Welcome to SomShop</h1>
        <Link href='/products'>Go To Products</Link>
    </div>
  )
}

export default Showcase