import {Link} from 'react-router-dom';
export default function Navigation() {

    return (

        <nav>
            <ul id="navbarmenu">
                <li>
                    <Link className="navbar-item" to="/">
                        About Me
                    </Link>  
                </li>
                    <span class="divider">|</span> 
                <li>
                    <Link className="navbar-item" to="/portfolio">
                        My portfolio
                    </Link>  
                </li>
                    <span class="divider">|</span> 
                <li>
                    <Link className="navbar-item" to="/contact">
                        Contact Me
                    </Link>  
                </li>
                <span class="divider">|</span> 
                <li>
                    <Link className="navbar-item" to="/resume">
                        Resume
                    </Link>  
                </li>
            </ul>
        </nav>

    )
}
