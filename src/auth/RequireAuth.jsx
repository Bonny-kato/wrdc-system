import {useAuth} from "../provider/auth";
import {Navigate, useLocation} from "react-router-dom";
import {saveValueToLocalStorage} from "../hooks/useLocalStorageState";

 const RequireAuth = ({ children }) => {
    const { authUser } = useAuth();
    const location = useLocation();

    if (!authUser) {
        saveValueToLocalStorage('wb-router-from', location);

        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they log in, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

     console.log('login')

    return (
        <>
            {children}
        </>
    );
}
export default RequireAuth;


