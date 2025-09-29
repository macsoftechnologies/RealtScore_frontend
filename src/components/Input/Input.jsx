import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type = "text",
  label, // Added the new label prop
  placeholder,
  value,
  onChange,
  mode = "text", // "numeric" | "alpha" | "alphanumeric" | "text"
  error,
}) => {
  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (mode === "numeric") {
      const validPattern = /^-?\d*(\.\d*)?$/;
      inputValue = inputValue.replace(/[^0-9.\-]/g, "");
      if ((inputValue.match(/-/g) || []).length > 1 || (inputValue.includes("-") && inputValue[0] !== "-")) {
        inputValue = inputValue.replace(/-/g, "");
      }
      const parts = inputValue.split(".");
      if (parts.length > 2) {
        inputValue = parts[0] + "." + parts.slice(1).join("");
      }
      if (!validPattern.test(inputValue)) return;
    }else if (mode === "alpha") {
      inputValue = inputValue.replace(/[^a-zA-Z]/g, ""); // only alphabets
    } else if (mode === "alphanumeric") {
      inputValue = inputValue.replace(/[^a-zA-Z0-9]/g, ""); // only letters+numbers
    }

    onChange && onChange(inputValue);
  };

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.inputLabel}>{label}</label>} {/* Render the label */}
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