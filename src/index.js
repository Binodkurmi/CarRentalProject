import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import
import "./index.css"; // Custom CSS import
import App from "./App"; // Main App component
import "remixicon/fonts/remixicon.css"; // Remix icon CSS
import "slick-carousel/slick/slick.css"; // Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme CSS

import { BrowserRouter as Router } from "react-router-dom"; // Import Router

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root element for React
root.render(
  <React.StrictMode>
    <Router>
      <App /> {/* Main application component */}
    </Router>
  </React.StrictMode>
);
