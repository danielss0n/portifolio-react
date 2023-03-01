import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer class="page-footer transparent z-depth-3" style={{"box-shadow":"white"}}>
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">

                    
                    </div>
                    <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                        <li>
                            <a href="https://github.com/danielss0n">
                                <i class="bi-github" style={{ fontSize: "2rem", marginRight: "10px", marginRight: "0px" }}></i>
                                <span style={{ marginRight: "10px", marginLeft: "10px"}}>Github</span>
                            </a>  
                        </li>

                        <li>
                            <a href="https://www.instagram.com/danielsonczar/">
                                <i class="bi-instagram" style={{ fontSize: "2rem", marginRight: "10px", marginLeft: "0px"}}></i>
                                <span>Instagram</span>
                            </a> 
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/cassiano-danielsson-169a0b214/">
                                <i class="bi-linkedin" style={{ fontSize: "2rem", marginRight: "10px", marginLeft: "0px"}}></i>
                                <span>Linkedin</span>
                            </a> 
                        </li>
                            
                    </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
  
                <div class="container">
                    
                © 2023 Cassiano Danielsson - 
                Website made with ReactJS, styled with MaterializeCSS
                </div>
            </div>
        </footer>
        )
    }
export default Footer