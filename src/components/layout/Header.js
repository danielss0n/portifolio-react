import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper grey darken-4">
                <Link to="/" class="brand-logo hide-on-med-and-down">Cassiano Danielsson</Link>
                <ul id="nav-mobile" class="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shopping">Shopping</Link></li>
                    <li><Link to="/nfts/underwater-club">NFTs</Link></li>
                    <li><Link to="/artworks">Artworks</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
        
        </div>
    )
}
export default Header