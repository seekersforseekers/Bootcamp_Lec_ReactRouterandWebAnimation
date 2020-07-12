import React from "react";
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Home from './Comonents/Home';
import About from './Comonents/About';
import Product from './Comonents/Product';
import ProductItem from "./Comonents/ProductItem";
import NavBar from './Comonents/NavBar';
function RouterConfig() {
  return (
    <div>
    
    <Router>
  <NavBar/>
      <Switch> 
        <Route exact path="/" component={Home}/> 
        <Route path="/about" component={About}/> 
        <Route path="/product" component={Product}/> 
        <Route path="/product/:ids" component={ProductItem}/> 
        <Route path="*" component={()=><h2>404 Not Found</h2>}/>
        {/* This components specifies the URL route for the component. This has two attributes, path= and component= */}
      </Switch>
 
    </Router>
   
    </div>
  );
}

export default RouterConfig;