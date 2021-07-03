import Home from "./Component/Pages/Home/Home";
import Sidebar from "./Component/Sidebar/Sidebar";
import Topbar from "./Component/topbar/Topbar";

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
