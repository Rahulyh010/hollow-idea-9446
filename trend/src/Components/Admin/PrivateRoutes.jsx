import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const PrivateRoutes = ({children})=>{

    const location = useLocation();
    const isAuthV = useSelector((store)=>store.adminauth.isAuth);
    const PrivateToast = () => {
        toast("Login First");
    <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
       
                />
    
    }
    if(!isAuthV){
        PrivateToast()
        return <Navigate to={'/Login'} state={location.pathname} replace/>
        
    }
    else{
        return children;
    }
}

export default PrivateRoutes;