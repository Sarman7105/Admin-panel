import Home from "./Component/Pages/Home/Home";
import Sidebar from "./Component/Sidebar/Sidebar";
import Topbar from "./Component/topbar/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from "./Component/Pages/UserList/UserList";

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
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
