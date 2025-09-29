
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Existing pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";

// New admin panel page
import AdminPanel from "./admin/AdminPanel";

function App() {
  //   // Log and show API URL (from .env.development / .env.production)
  //   // console.log("API URL:", process.env.REACT_APP_API_URL);
  return (
    <Router>
      <div>
        {/* Show API URL on all pages */}
        {/* <h1>My API URL is: {process.env.REACT_APP_API_URL}</h1> */}
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />

          {/* Admin dashboard */}
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

