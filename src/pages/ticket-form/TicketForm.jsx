import React, { useState } from "react";
import "./form.css";
import progress2 from "../../assets/images/progress2.svg";
import photoPlaceholder from "../../assets/images/photo.svg";
import mail from "../../assets/images/mail.svg";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dxcmstqde/upload";
const UPLOAD_PRESET = "hngticket";

const TicketForm = () => {
  const { number } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
    number: number,
    photo: "", // Stores the Cloudinary image URL
  });

  const [errors, setErrors] = useState({});
  const [hover, setHover] = useState(false); // Tracks hover state for image

  // Handle input changes & update localStorage
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem("ticketFormData", JSON.stringify(updatedData));
      return updatedData;
    });

    // Clear error for this field when user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Handle image upload to Cloudinary
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        photo: "Profile photo is required",
      }));
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      const imageUrl = response.data.secure_url;

      setFormData((prevData) => {
        const updatedData = { ...prevData, photo: imageUrl };
        localStorage.setItem("ticketFormData", JSON.stringify(updatedData));
        return updatedData;
      });

      // Clear the error message after successful upload
      setErrors((prevErrors) => ({ ...prevErrors, photo: "" }));
    } catch (error) {
      console.error("Image upload failed:", error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        photo: "Failed to upload image. Try again.",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    // if (!formData.request) newErrors.request = "Special request is required";
    if (!formData.photo) newErrors.photo = "Profile photo is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save to localStorage
    localStorage.setItem("ticketFormData", JSON.stringify(formData));

    // Navigate to the next page
    navigate("/ticket");
  };

  return (
    <div className="event-wrapper">
      <div className="event-header">
        <div>
          <h2>Attendee Details</h2>
          <span>Step 2/3</span>
        </div>
        <img src={progress2} alt="progress" />
      </div>
      <form className="ticket-details" onSubmit={(e) => e.preventDefault()}>
        <div className="picture">
          <h2>Upload Profile Photo</h2>
          <div
            className="photo-box"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <label htmlFor="photo-upload" className="photo">
              <img src={formData.photo || photoPlaceholder} alt="Profile" />
            </label>
            <input
              type="file"
              id="photo-upload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
          {errors.photo && <p className="error">{errors.photo}</p>}
        </div>

        <div className="line"></div>

        <div className="input">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="input">
          <label htmlFor="email">Enter your email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="email"
            required
            placeholder="hello@avioflagos.io"
          />
          <img src={mail} alt="mail" />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input">
          <label htmlFor="request">Special request?</label>
          <textarea
            name="request"
            value={formData.request}
            onChange={handleChange}
            // required
          ></textarea>
          {/* {errors.request && <p className="error">{errors.request}</p>} */}
        </div>

        <div className="buttons2">
          <Link to="/">
            <button type="button">Back</button>
          </Link>
          <button type="button" onClick={handleSubmit}>
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
