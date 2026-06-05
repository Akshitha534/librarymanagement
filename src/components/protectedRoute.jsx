import { Navigate,Outlet,useLoation } from "react-router-dom";

function ProtectedRoute({isLoggedIn}) 
{
    const location = useLocation();
        if(isLoggedIn){
         return <Navigate to ="/login" replaces state={{from: location}}/>
        
        }
        return <Outlet/>;
    }

    export default ProtectedRoute;
    
