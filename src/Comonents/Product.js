import React from 'react';
import Shoes from './Shoes.json';
import {Link ,Outlet} from 'react-router-dom';
function Product(){
    return(
<div>
    <Outlet>
    <div className="Product">

      {Object.keys(Shoes).map(keyName=> {
          const shoe=Shoes[keyName];
          return( <Link key={keyName} className="link"  to={`/product/${keyName}`}> <h2>{shoe.name}</h2><img src={shoe.img} height={250}/></Link>)})  }
    
    
    </div>
    </Outlet>
</div>

    );  
                                          
}

export default Product;
