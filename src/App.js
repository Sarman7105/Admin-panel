import './App.css'
import Home from "./Component/Pages/Home/Home";
import Sidebar from "./Component/Sidebar/Sidebar";
import Topbar from "./Component/topbar/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from "./Component/Pages/UserList/UserList";
import User from "./Component/Pages/User/User";
import NewUser from './Component/Pages/NewUser/NewUser'
import ProductList from './Component/Pages/ProductList/ProductList';
import Product from './Component/Pages/Product/Product';
import NewProduct from './Component/Pages/NewProduct/NewProduct';
function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route>

          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>

          <Route path="/products">
            <ProductList/>
          </Route>

          <Route path="/product/:userId">
            <Product/>
          </Route>

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
