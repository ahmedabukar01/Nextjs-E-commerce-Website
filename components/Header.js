import Link from 'next/link'
import headerStyles from '../styles/Layout.module.css'


const Header = () => {
  return (
    <div className={headerStyles.header}>
        <h1>SomShop</h1>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/products'>Products</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header