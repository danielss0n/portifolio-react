import ImageCard from "./ImageCard"
import { useParams } from 'react-router-dom';

function ImageBoard() {
    const {collectionName} = useParams();

    return (
        <div class="container">
            <ImageCard collection={collectionName}>
                {console.log(collectionName)}
            </ImageCard>
        </div>
        
    )
    
}

export default ImageBoard