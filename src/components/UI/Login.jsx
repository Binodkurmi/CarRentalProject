import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
	const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email format is invalid";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Login failed");
        }
        const data = await response.json();
        const { token } = data;
        localStorage.setItem("accessToken", token);
        setIsLoggedIn(true);
				navigate(-1); 
			console.log('data',data)
        // Show success alert and clear input fields
        alert("Login successful!");

        // Clear form fields after successful login
        setFormData({ email: "", password: "" });
        // toggleModal(); // Close modal
      } catch (error) {
        console.error("Error:", error.message);
        setErrors({ form: error.message });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
          
          <center>OR</center>
          <div className="social-login">
            <div className="social-icon">
              <FaGoogle className="icon" />
            </div>
            <div className="social-icon">
              <FaFacebook className="icon" />
            </div>
          </div>
        </>

        <>
          <Button style={{ backgroundColor: "#000d6b", color: "white" }} type="submit">
            Login
          </Button>
          <Button style={{ backgroundColor: "#f9a826", color: "white" }}>
            Cancel
          </Button>
        </>
      </form>
    </>
  );
};

export default Login;
