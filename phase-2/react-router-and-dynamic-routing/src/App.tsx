import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const User = lazy(() => import("./components/User"));
const NotFound = lazy(() => import("./components/NotFound"));
const NavBar = lazy(() => import("./components/NavBar"));
const Contact = lazy(() => import("./components/Contact"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const Profile = lazy(() => import("./components/Profile"));
const Setting = lazy(() => import("./components/Setting"));
const Login = lazy(() => import("./components/Login"));

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  );
}

export default App;
