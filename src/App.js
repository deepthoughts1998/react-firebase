import AddUser from "./components/AddUser";
import AuthProvider from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Profile from "./components/Profile";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/create" element={<AddUser />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/" element={<Home />} />
          
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
