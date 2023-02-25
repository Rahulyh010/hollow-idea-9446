
import { useSelector } from 'react-redux';
import './App.css';
import { Navbar } from './Components/Navbar';
import Admin from './Pages/Admin';
import Mainpage from './Pages/Mainpage';
import { AllRoutes } from './Routes/AllRoutes';

function App() {

  const auth = useSelector((store)=>store.adminauth.isAuth)
  // console.log(auth)
  
  return (
    <div className="App" style={{margin:"0px",padding:"0px"}}>
      
     {auth ? <Admin /> : <Mainpage/>}
      
    </div>
  );
}

export default App;
