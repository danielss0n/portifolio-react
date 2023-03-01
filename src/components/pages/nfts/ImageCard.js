const ImageCard = (collection) => {
    let numbers = []


    for(let i=1; i<=100; i++){
        numbers.push(i)
    }

    return (
        // <div class="col s1 m8 offset-m2 l6 offset-l3 grey darken-3">
            // <div class="card-panel grey lighten-5 z-depth-1 grey darken-3">
                <div class="row grey transparent">
                
                        { numbers.map((number) => 
                           <div class="col s6 m2">
                                <img src={`/nfts/${collection.collection}/${number}.png`} 
                                class="responsive-img"
                                key={number}
                                />
                            </div>
                            ) 
                        }
                        
                    <div class="col s10">
                    </div>
                </div>
            // </div>
        // </div>
    )
}

export default ImageCard