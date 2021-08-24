import './index.css';
import { Link } from 'react-router-dom';
import {navigationLinks} from './Links';

const Navbar = () => {

  return (
    <div>
      <ul  id="nav">
      <navigationLinks.Consumer>              
        {links =>    
        
          {
            console.log(links)
            var myNavLinks = links.links.map((link,i)=>
            <li key={link.id}><Link key={link.id} to={link.link}>{link.label}</Link></li>
            )            
            return [<li><Link to="/home"><span id="logo">CreasedBeast</span></Link></li>].concat(myNavLinks)
        }
        }
      </navigationLinks.Consumer>
      </ul>
    </div>

  );
}

export default Navbar;