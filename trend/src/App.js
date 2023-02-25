
import './App.css';
import { Navbar } from './Components/Navbar';
import Admin from './Pages/Admin';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App" style={{margin:"0px",padding:"0px"}}>
      <Navbar/>
      <AllRoutes/>
      
      <Admin />
     
      
    </div>
  );
}

export default App;
