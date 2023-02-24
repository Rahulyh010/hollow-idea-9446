
import './App.css';
<<<<<<< HEAD
import Admin from './Pages/Admin';
=======
import { Navbar } from './Components/Navbar';
// import Admin from './Pages/Admin';
>>>>>>> 788a97eee81c34c560c24ebe1ab4cf2954e351f4
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App" style={{margin:"0px",padding:"0px"}}>
<<<<<<< HEAD
      {/* <AllRoutes/> */}
      <Admin/>
=======
      <Navbar/>
      <AllRoutes/>
      {/* <Admin/> */}
      
>>>>>>> 788a97eee81c34c560c24ebe1ab4cf2954e351f4
    </div>
  );
}

export default App;
