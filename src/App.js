import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage"
import Homewithsignin from "./pages/Homewithsignin"
import Listmovie from "./pages/Listmovie"
import Moviedetail from "./pages/Moviedetail"
import Signin from "./pages/Signin"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homewithsignin />} />
        <Route path="/listmovie" element={<Listmovie />} />
        <Route path="/moviedetail" element={<Moviedetail />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App