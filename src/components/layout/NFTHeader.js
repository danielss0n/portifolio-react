import { Link } from 'react-router-dom'
import NFTcard from './NFTcard'
function NFTHeader() {
    let random = () =>{return Math.floor(Math.random() * (100 - 1 + 1) + 1)}
    return (
        <div className='container'>
            <div class="row">
                <div class="col s6 m3">
                    <NFTcard
                        title="Under-water Club"
                        link="/nfts/underwater-club"
                        description="A project I made for a guy from Hungary, the original collection has 10.000 NFTS generated"
                        image={`/nfts/underwater-club/${random()}.png`}
                    ></NFTcard>
                </div>
                <div class="col s6 m3">
                    <NFTcard
                        title="Under-rock Club"
                        link="/nfts/underrock-club"
                        description="This was underwater Club's brother collection, also with 10.000 NFTS"
                        image={`/nfts/underrock-club/${random()}.png`}
                    ></NFTcard>
                </div>
                <div class="col s6 m3">
                    <NFTcard
                        title="Cripto warriors"
                        link="/nfts/criptowarriors"
                        description="That project was my first contact doing NFTS, a project that I managed and developed myself"
                        image={`/nfts/criptowarriors/${random()}.png`}
                    ></NFTcard>
                </div>
                <div class="col s6 m3">
                    <NFTcard
                        title="Lizards"
                        link="/nfts/lizards"
                        description="Size of 369 NFTS. It was randomly generated, but full of incompatibility in the layers for all to be combined"
                        image={`/nfts/lizards/${random()}.png`}
                    ></NFTcard>
                </div>
                <div class="col s6 m3">
                    <NFTcard
                        title="Comfy Bears"
                        link="/nfts/comfy-bears"
                        description="My first collection that I worked on for someone else. She had 10,000, but the background had a glitch that must be unique for each image"
                        image={`/nfts/comfy-bears/${random()}.png`}
                    ></NFTcard>
                </div>
            </div>
        </div>
    )
}
export default NFTHeader