import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Resetpassword from "./pages/Resetpassword"
import Forgotpassword from "./pages/Forgotpassword"
import Homepage from "./pages/Homepage"
import Homewithsignin from "./pages/Homewithsignin"
import Listmovie from "./pages/Listmovie"
import Moviedetail from "./pages/Moviedetail"
import Orderpage from "./pages/Orderpage"
import Paymentpage from "./pages/Paymentpage"
import Profilpage from "./pages/Profilpage"
import Historypage from "./pages/Historypage"
import Ticketactive from "./pages/Ticketactive"
import Ticketused from "./pages/Ticketused"
import Ticketexpired from "./pages/Ticketexpired"

const App = () => {
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
        <Route path="/order" element={<Orderpage />} />
        <Route path="/payment" element={<Paymentpage />} />
        <Route path="/profil" element={<Profilpage />} />
        <Route path="/history" element={<Historypage />} />
        <Route path="/ticket-active" element={<Ticketactive />} />
        <Route path="/ticket-used" element={<Ticketused />} />
        <Route path="/ticket-expired" element={<Ticketexpired />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App