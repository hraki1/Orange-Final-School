// components/VerifyEmail.js

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [message, setMessage] = useState("Verifying...");
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/verify/${token}`
        );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message || "Verification failed.");
        }

        setMessage("Email verified successfully! You can now log in.");
        setTimeout(() => {
          navigate("/"); // Redirect to login page
        }, 3000);
      } catch (error) {
        setMessage(error.message || "Verification failed. Please try again.");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return <div>{message}</div>;
};

export default VerifyEmail;
