import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import badWordsArray from "../../../util/badWords";
import { AuthContext } from "../../shared/context/auth-context";

export const ModalForm = ({ isOpen, onClose, homeref }) => {
  const auth = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    file: null,
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const validateField = (name, value) => {
    let errorMsg = "";
    if (name === "title" && !value.trim()) {
      errorMsg = "Title is required";
    } else if (name === "content" && value.length < 6) {
      errorMsg = "Content must be at least 6 characters long";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const containsBadWords = (text) => {
    const lowercasedText = text.toLowerCase();
    return badWordsArray.some((badWord) =>
      lowercasedText.includes(badWord.toLowerCase())
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateField("title", formData.title);
    validateField("content", formData.content);

    if (
      containsBadWords(formData.title) ||
      containsBadWords(formData.content)
    ) {
      withReactContent(Swal).fire({
        title: "Bad Words Detected!",
        text: "Your submission contains inappropriate language. Please edit and try again.",
        icon: "warning",
        confirmButtonText: "Edit",
      });
      return;
    }

    if (Object.values(errors).some((error) => error)) return;

    const dataSent = {
      title: formData.title,
      body: formData.content,
      creator: auth.exsistingUserId,
      image: formData.file,
    };

    console.log(dataSent);

    try {
      const dataF = new FormData();
      dataF.append("title", dataSent.title);
      dataF.append("body", dataSent.body);
      dataF.append("creator", dataSent.creator);
      dataF.append("image", dataSent.image);
      // console.log(formData);
      const response = await fetch("http://localhost:5000/api/question", {
        method: "POST",
        body: dataF,
      });

      const responseData = await response.json();

      if (response.ok) {
        const showSwal = () => {
          withReactContent(Swal).fire({
            title: "Asked Question Successfully!",
            text: "Your question has been asked.",
            icon: "success",
          });
        };

        showSwal();

        homeref(Math.random());
        onClose();
      } else {
        throw new Error(responseData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      const showSwal = () => {
        withReactContent(Swal).fire({
          title: "Somthing went WRONG",
          text: "Error creating post",
          icon: "warning",
        });
      };

      showSwal();
    }
  };

  return (
    <div className="fixed inset-0 bg-primary bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-primary">New Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`outline-none mb-2 p-2 w-full border ${
                errors.title ? "border-red-500" : "border-solid-1"
              }`}
              placeholder="Enter title"
            />
            {errors.title && (
              <span className="text-red-500">{errors.title}</span>
            )}
          </div>
          <div>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`outline-none border ${
                errors.content ? "border-red-500" : "border-solid-1"
              } mb-2 p-2 w-full`}
              placeholder="Enter content"
            ></textarea>
            {errors.content && (
              <span className="text-red-500">{errors.content}</span>
            )}
          </div>
          <div>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="outline-none border-none mb-2 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Post
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 mt-4 text-white bg-red-500 p-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};
