import { useState } from "react";

export const FormAdd = () => {
  const [formData, setFormData] = useState({ inputText: "" });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.inputText.trim()) {
      setError("Please enter some text.");
      return;
    }

    setError("");
    console.log("Form submitted with:", formData);
    // Handle successful form submission (e.g., send to server)
  };

  return (
    <div className="form-container">
      <h2>Add New Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputText">Text Input</label>
          <input
            type="text"
            id="inputText"
            name="inputText"
            value={formData.inputText}
            onChange={handleChange}
            placeholder="Enter some text"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
