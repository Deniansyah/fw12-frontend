import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const token = useSelector(state => state.auth.token)

  if (token) {
    return children
  } else {
    return <Navigate to="/sign-in" />
  }
}

export default PrivateRoute
