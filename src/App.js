import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
// import About from "./pages/About";

function App() {
  // Log and show API URL (from .env.development / .env.production)
  // console.log("API URL:", process.env.REACT_APP_API_URL);

  return (
    <Router>
      <div>
        {/* Show API URL on all pages */}
        {/* <h1>My API URL is: {process.env.REACT_APP_API_URL}</h1> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
