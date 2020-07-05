import React from 'react';
import './About.css';
import Menu from './Menu';
import { Pagination, PaginationItem, PaginationLink} from 'reactstrap';


function About() {
  return (
    <div className="App">
	  	<Menu />
          <div className="Aboutstyle">
            <h1>About Us</h1>
        </div>
       
        <Pagination>
    <PaginationItem disabled>
        <PaginationLink first>
          
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="Home">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="About">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      
      <PaginationItem disabled>
        <PaginationLink last>
          
        </PaginationLink>
      </PaginationItem>
    </Pagination>
    </div>
 );
}
export default About;