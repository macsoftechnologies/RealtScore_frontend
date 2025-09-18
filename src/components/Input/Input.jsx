import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  mode = "text", // "numeric" | "alpha" | "alphanumeric" | "text"
  error,
}) => {
  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (mode === "numeric") {
      inputValue = inputValue.replace(/[^0-9]/g, ""); // only numbers
    } else if (mode === "alpha") {
      inputValue = inputValue.replace(/[^a-zA-Z]/g, ""); // only alphabets
    } else if (mode === "alphanumeric") {
      inputValue = inputValue.replace(/[^a-zA-Z0-9]/g, ""); // only letters+numbers
    }

    onChange && onChange(inputValue);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;
