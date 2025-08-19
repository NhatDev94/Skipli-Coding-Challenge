import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import Verify from "./pages/auth/Verify";
import Home from "./pages/Home";
import AccountSetup from "./pages/auth/AccountSetup";

function App() {
  const isLogin = true;
  return (
    <Routes>
      <Route path="/" element={isLogin ? <Home /> : <SignIn />} />
      {/* Add other routes as needed */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="account-setup" element={<AccountSetup />} />
    </Routes>
  );
}

export default App;
