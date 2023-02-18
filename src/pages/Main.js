import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";
import Resetpassword from "./Resetpassword";
import Forgotpassword from "./Forgotpassword";
import Homepage from "./Homepage";
import Homewithsignin from "./Homewithsignin";
import Listmovie from "./Listmovie";
import Moviedetail from "./Moviedetail";
import Detail from "./Detail";
import Orderpage from "./Orderpage";
import Paymentpage from "./Paymentpage";
import Profilpage from "./Profilpage";
import Historypage from "./Historypage";
import Ticketactive from "./Ticketactive";
import Ticketused from "./Ticketused";
import Ticketexpired from "./Ticketexpired";
import Managemovie from "./Managemovie";
import Dashboard from "./Dashboard";
import Manageschedule from "./Manageschedule";

import PrivateRoute from "../components/PrivateRoute";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/home" element={<Homewithsignin />} />
        <Route path="/list-movie" element={<Listmovie />} />
        <Route path="/movie-detail" element={<Moviedetail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/order" element={<Orderpage />} />
        <Route path="/payment" element={<Paymentpage />} />
        <Route
          path="/profil"
          element={
            <PrivateRoute>
              <Profilpage />
            </PrivateRoute>
          }
        />
        <Route path="/history" element={<Historypage />} />
        <Route path="/ticket-active" element={<Ticketactive />} />
        <Route path="/ticket-used" element={<Ticketused />} />
        <Route path="/ticket-expired" element={<Ticketexpired />} />
        <Route path="/manage-movie" element={<Managemovie />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-schedule" element={<Manageschedule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
