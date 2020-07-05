import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

const Menu = () =>{
    return(
        <div className="Menustyle">
            <ul>
              <li><img src="favicon.ico" width="70px" className="rounded" alt="img"/></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="About">About</Link></li>
              <li><Link to="Contact">Contact</Link></li>
              <Button className="btn btn-light btn-md">Book</Button>
            </ul>
        </div>

    )
}

export default Menu;
