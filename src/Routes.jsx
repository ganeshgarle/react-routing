import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Login,
  Signup,
  Layout,
  Home,
  Blogs,
  Contact,
  NoPage,
  SideMenu,
} from "./component";
import "./App.css";
import { AddTeam, Team, Details } from "./Team";

// Example of checking authentication status (you can replace with your actual logic)
const isAuthenticated = () => {
  console.log();
  return localStorage.getItem("isLoggedIn") === "true";
};

// Custom route for protected routes that require authentication
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? (
    <>
      <Layout />
      {element}
    </>
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
};

const NavRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <SideMenu />
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <SideMenu />
                <Signup />
              </>
            }
          />

          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/blogs" element={<PrivateRoute element={<Blogs />} />} />
          <Route path="/teams" element={<PrivateRoute element={<Team />} />} />
          <Route
            path="/add-team"
            element={<PrivateRoute element={<AddTeam />} />}
          />
          <Route
            path="/contact"
            element={<PrivateRoute element={<Contact />} />}
          />
          <Route
            path="/details/:userId"
            element={<PrivateRoute element={<Details />} />}
          />

          <Route path="*" element={<PrivateRoute element={<NoPage />} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavRoutes;
