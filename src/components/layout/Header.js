import { Link } from 'react-router-dom'
function Header() {
    return (
        <div class="transparent z-depth-1">
            <nav class="container">
                <div class="nav-wrapper black z-depth-0">
                <Link to="/" class="brand-logo hide-on-med-and-down">Danielsson.</Link>
                <ul id="nav-mobile" class="right">
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/nfts">NFTs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
        
        </div>
    )
}
export default Header