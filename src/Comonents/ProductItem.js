import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './Shoes.json';
function ProductItem(){
  const {id}=useParams();
  //const shoe=Shoes[id];
  console.log(id)
    return(
<div>
   <h1>hello prodocut item are here</h1>
</div>
    );
}

export default ProductItem;
