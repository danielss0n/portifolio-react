import { Link } from 'react-router-dom'
function NFTHeader() {
    return (
        <div>
            <div class="nav-content grey darken-3">
                <ul class="tabs tabs-transparent">
                    <li class="tab"><Link to="/nfts/underwater-club">Under-water Club</Link></li>
                    <li class="tab"><Link to="/nfts/underrock-club">Under-rock Club</Link></li>
                    <li class="tab"><Link to="/nfts/lizards">lizards</Link></li>
                    <li class="tab"><Link to="/nfts/comfy-bears">Comfy Bears</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default NFTHeader