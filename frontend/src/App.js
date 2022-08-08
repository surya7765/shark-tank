import './App.css';
import Home from './components/Routes/Home';
import Auth from "./components/Routes/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobShow from './components/directory/jobpage/JobShow';
import JobDetails from "./components/directory/jobpage/JobDetails";
import UserDashboard from "./components/directory/User/UserDashboard";
import AdminHome from './components/directory/Admin/home/AdminHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          Home
        </Route>
        <Route exact path="/auth" element={<Auth />}>
          Auth
        </Route>
        <Route exact path="/jobs" element={<JobShow />}>
          Jobs
        </Route>
        <Route exact path="/jobs/:_id" element={<JobDetails />}>
          Jobs
        </Route>
        <Route exact path="/profile" element={<UserDashboard />}>
          Profile
        </Route>
        <Route exact path="/admin" element={<AdminHome />}>
          Admin
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
