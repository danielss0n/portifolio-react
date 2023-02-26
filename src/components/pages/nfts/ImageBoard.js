import ImageCard from "./ImageCard"
import { useParams } from 'react-router-dom';

function ImageBoard() {
    const {collectionName} = useParams();

    return (
        <ImageCard collection={collectionName}>
            {console.log(collectionName)}
        </ImageCard>
    )
    
}

export default ImageBoard