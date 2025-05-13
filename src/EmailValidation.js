import React, { useState } from "react";

function EmailValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.includes("@")) {
      setError("Invalid email");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (!error && email.includes("@")) {
      alert(`Email submitted: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h2>Email Validation Form</h2>

      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validate}
        style={{ padding: "8px", width: "100%" }}
      />

      {error && (
        <div style={{ color: "red", marginTop: "5px" }}>{error}</div>
      )}

      <br />

      <button type="submit" style={{ padding: "8px 16px" }}>Submit</button>
    </form>
  );
}

export default EmailValidation;