import { Link } from 'react-router-dom'
function NFTcard(props) {
    return (
      <div class="card transparent" >
        <div class="card-image">
          <img src={props.image}/>
          <span class="card-title">{props.title}</span>
        </div>
        <div class="card-content"style={{height:"190px"}}>
          <p>{props.description}</p>
        </div>
        <div class="card-action">
          <Link to={props.link}>See Collection</Link>
        </div>
      </div>
    )
}
export default NFTcard