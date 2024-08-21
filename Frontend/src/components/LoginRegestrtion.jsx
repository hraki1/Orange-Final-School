import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

import "../styles/login.css";
import ErrorModal from "./ErrorModal";
import LoadingSpinner from "./LoadingSpinner";
import { AuthContext } from "./shared/context/auth-context";

const LoginRegistration = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [action, setAction] = useState(""); // 'active' for registration, '' for login
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false); // Optional
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
    // Re-validate the email field when checkbox state changes
    validateField("email", formData.email);
  };

  const validateField = (name, value) => {
    let errorMessage = "";
    if (name === "name" && action === "active" && !value.trim()) {
      errorMessage = "Name is required";
    } else if (name === "email") {
      if (!value.trim()) {
        errorMessage = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = "Email address is invalid";
      } else if (termsAccepted && !value.endsWith("@aau.edu.jo")) {
        errorMessage = "Use Your University Email you are a student.";
      }
    } else if (name === "password") {
      if (!value.trim()) {
        errorMessage = "Password is required";
      } else if (value.length < 6) {
        errorMessage = "Password should be at least 6 characters";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const validateForm = () => {
    const fields =
      action === "active"
        ? ["name", "email", "password"]
        : ["email", "password"];
    const newErrors = {};
    fields.forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) {
        newErrors[field] = errors[field];
      }
    });
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e, isRegistration) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const isMember = formData.email.endsWith("@aau.edu.jo");

        const endpoint = isRegistration
          ? "http://localhost:5000/api/user/signup"
          : "http://localhost:5000/api/user/login";

        const bodyData = {
          ...formData,
          ...(isRegistration && { name: formData.name }), // Include name only for registration
          isMember: isMember,
        };
        console.log(bodyData);
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message || "Operation failed");
        }
        auth.login();
        auth.exsistingUserHandler(responseData.user._id);
        console.log(responseData.user._id);

        console.log(responseData);
        if (responseData.user.isAdmin) {
          console.log("isAdmin = true");
          auth.isAdminHandler(true);
        }
        if (responseData.user.isMember) {
          console.log("isMember = true");
          auth.isMemberHandler(true);
        }
        navigate("/Ask");
      } catch (error) {
        setError(error.message || "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  const renderInput = (name, type, placeholder, icon) => (
    <div className="relative w-full my-8 mx-0 h-12">
      <input
        className={`w-full h-full bg-transparent placeholder:text-white border-none outline-none custom-bg rounded-[40px] text-lg text-white py-5 pr-11 pl-5 ${
          errors[name] ? "border-red-500" : ""
        }`}
        name={name}
        onChange={handleChange}
        onBlur={() => validateField(name, formData[name])}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!errors[name]}
        aria-describedby={`${name}-error`}
      />
      {icon}
      {errors[name] && (
        <p id={`${name}-error`} className="text-red-500 ml-3">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div className="back">
      {isLoading && <LoadingSpinner asOverlay />}
      <ErrorModal error={error} onClear={errorHandler} />
      <div
        className={`wrapper relative w-[420px] font-abc h-[450px] bg-transparent rounded-lg text-white flex items-center ${action}`}
      >
        <div className="w-full p-10 login">
          <form onSubmit={(e) => handleSubmit(e, false)}>
            <h1 className="text-4xl text-center font-extrabold">Login</h1>
            {renderInput(
              "email",
              "email",
              "Email",
              <FaUser className="absolute right-[20px] top-1/3 text-lg" />
            )}
            {renderInput(
              "password",
              "password",
              "Password",
              <FaLock className="absolute right-[20px] top-1/3 text-lg" />
            )}

            <div className="flex justify-between text-sm mt-5 mr-0 ml-4">
              <label>
                <input className="mr-1" type="checkbox" />
                Remember me
              </label>
              <a className="text-white hover:underline" href="#">
                Forgot Password?
              </a>
            </div>

            <button
              className="w-full h-11 bg-white border-none outline-none rounded-[40px] font-bold cursor-pointer text-black shadow-sm mt-4"
              type="submit"
              disabled={Object.values(errors).some((err) => err)}
            >
              Login
            </button>

            <div className="text-sm text-center mt-5 mr-0 ml-4">
              <p>
                Don't have an account?{" "}
                <a
                  className="text-white font-semibold hover:underline"
                  href="#"
                  onClick={() => setAction("active")}
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div
          className={`register w-full p-10 absolute ${
            action ? "translate-x-0" : "translate-x-[400px]"
          }`}
        >
          <form onSubmit={(e) => handleSubmit(e, true)}>
            <h1 className="text-4xl text-center font-extrabold">Register</h1>
            {renderInput(
              "name",
              "text",
              "Name",
              <FaUser className="absolute right-[20px] top-1/3 text-lg" />
            )}
            {renderInput(
              "email",
              "email",
              "Email",
              <FaEnvelope className="absolute right-[20px] top-1/3 text-lg" />
            )}
            {renderInput(
              "password",
              "password",
              "Password",
              <FaLock className="absolute right-[20px] top-1/3 text-lg" />
            )}

            <div className="flex justify-between text-sm mt-5 mr-0 ml-4">
              <label>
                <input
                  className="mr-1"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                />
                Are you a student at Amman Arab University
              </label>
            </div>

            <button
              className="w-full h-11 bg-white border-none outline-none rounded-[40px] font-bold cursor-pointer text-black shadow-sm mt-4"
              type="submit"
              disabled={Object.values(errors).some((err) => err)}
            >
              Register
            </button>

            <div className="text-sm text-center mt-5 mr-0 ml-4">
              <p>
                Already have an account?{" "}
                <a
                  className="text-white font-semibold hover:underline"
                  href="#"
                  onClick={() => setAction("")}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistration;
