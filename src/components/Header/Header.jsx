import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import Google and Facebook icons
import "../../styles/header.css";
import "../../styles/Login.css";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blogs", display: "Blog" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const menuRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false); // State for modal
  const [isRegister, setIsRegister] = useState(false); // State to determine login or register form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
	const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState({});

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const toggleModal = () => setModalOpen(!modalOpen); // Function to toggle modal

  const openLogin = () => {
		console.log("formData", formData)
    setIsRegister(false);
    toggleModal();
  };

  const openRegister = () => {
		console.log("formData", formData)
    setIsRegister(true);
    toggleModal();
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

	console.log("formData", formData)

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (isRegister) {
      if (!formData.name.trim()) {
        errors.name = "Name is required";
      }
      if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        errors.phone = "Phone number must be 10 digits";
      }
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
    }

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

  // Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			try {
				if (isRegister) {
					const response = await fetch("http://localhost:5000/api/auth/register", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(formData),
					});
					
					if (!response.ok) {
						const errorData = await response.json();
						throw new Error(errorData.message || "Registration failed");
					}
	
					alert("Registration successful!");
					toggleModal();
				} else {
					const response = await fetch("http://localhost:5000/api/auth/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							email: formData.email,
							password: formData.password,
						}),
					});
					
					if (!response.ok) {
						const errorData = await response.json();
						throw new Error(errorData.message || "Login failed");
					}
	
					const data = await response.json();
					const { token } = data;
					localStorage.setItem("accessToken", token);
					setIsLoggedIn(true);
					alert("Login successful!");
					toggleModal();
				}
			} catch (error) {
				console.error("Error:", error.message);
				setErrors({ ...errors, form: error.message });
			}
		}
	};
	

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    alert("Logged out successfully!");
  };

  // Handle social login
  const handleSocialLogin = (platform) => {
    if (platform === "google") {
      alert("Google login clicked!");
      // Logic for Google login can be added here
    } else if (platform === "facebook") {
      alert("Facebook login clicked!");
      // Logic for Facebook login can be added here
    }
  };

  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +91-983576543
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
						<div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {isLoggedIn ? (
                  <Button onClick={handleLogout} className="logout-button">
                    Logout
                  </Button>
                ) : (
                  <>
                    <Link to="#" className="d-flex align-items-center gap-1" onClick={openLogin}>
                      <i className="ri-login-circle-line"></i> Login
                    </Link>
                    <Link to="#" className="d-flex align-items-center gap-1" onClick={openRegister}>
                      <i className="ri-user-line"></i> Register
                    </Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) => (navClass.isActive ? "nav__active nav__item" : "nav__item")}
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Modal Component */}
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{isRegister ? "Register" : "Login"}</ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            {isRegister ? (
              <div className="register-form">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="error-message">{errors.phone}</p>}

                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}

                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
              </div>
            ) : (
              <div className="login-form">
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
                  <div className="social-icon" onClick={() => handleSocialLogin("google")}>
                    <FaGoogle className="icon" /> {/* Google Icon */}
                  </div>
                  <div className="social-icon" onClick={() => handleSocialLogin("facebook")}>
                    <FaFacebook className="icon" /> {/* Facebook Icon */}
                  </div>
                </div>

                <p className="register-link">
                  Don't have an account!
                  <Link to="#" onClick={openRegister} style={{ color: "#000d6b", textDecoration: "none" }}>
									&nbsp; &nbsp;Register here
                  </Link>
                </p>
								
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              style={{ backgroundColor: "#000d6b", color: "white" }} // Primary button style
              type="submit"
            >
              {isRegister ? "Register" : "Login"}
            </Button>
            <Button
              style={{ backgroundColor: "#f9a826", color: "white" }} // Cancel button style
              onClick={toggleModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </header>
  );
};

export default Header;
