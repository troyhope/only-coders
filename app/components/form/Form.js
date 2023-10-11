"use client";

import { useState } from "react";

import styles from "./Form.module.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    const response = await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, confirmPassword }),
    });
    const data = await response.json();

    if (data.error) {
      setError(data.error);
      return;
    }

    setMessage(data.message);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function handleInputChange(setFunction, value) {
    setError("");
    setFunction(value);
  }

  return (
    <div className={styles.container}>
      <form id="user-form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => handleInputChange(setEmail, e.target.value)}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => handleInputChange(setPassword, e.target.value)}
          placeholder="Password"
        />
        <input
          name="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) =>
            handleInputChange(setConfirmPassword, e.target.value)
          }
          placeholder="Confirm Password"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}
