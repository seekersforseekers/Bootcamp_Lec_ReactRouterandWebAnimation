import React from 'react';
import {Link} from 'react-router-dom';// {/*ya href ka kam kr rhaha h */}
function NavBar(){
    return(
<div>
 
   <Link to="/"> Home</Link>
   <Link to="/about">  AboutUs</Link>
   <Link to="/product">  Product</Link>
  
</div>
    );
}

export default NavBar;
