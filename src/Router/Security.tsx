import { Redirect, Route, RouteProps } from 'react-router';
import User from '../Model/User'

interface pageSecurity extends RouteProps {
    allowRoles: Array<"admin" | "user">;
    user?: User;
}

const Security : React.FC<pageSecurity> =
({allowRoles, user, ...props}) => {
    if(!user){
        console.log("Redirecting in not user", user)
        return <Redirect to='/login'/>
    }

    if(allowRoles && !allowRoles.includes(user?.role || '')){
        console.log("Redirecting in allowRules", user)
        return <Redirect to='/notallowed'/>
    }
    console.log("Redirecting in final", user)
    return <Route {...props} />
}

export default Security;