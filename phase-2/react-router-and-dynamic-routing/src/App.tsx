import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute isAuth={false}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
