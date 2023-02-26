const ImageCard = (collection) => {
    let numbers = []


    for(let i=1; i<=100; i++){
        numbers.push(i)
    }

    return (
        <div>
            {console.log(collection)}
            { numbers.map((number) => <img src={`/nfts/${collection.collection}/${number}.png`} 
            style={{height:"150px"}}
            key={number}
            />) }
        </div>
    )
}

export default ImageCard