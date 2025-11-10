import React from "react";
import OtpInput from "react-otp-input";

export default function CustomOtp({ value, onChange }) {
  const inputStyle = {
    width: "30px",
    height: "30px",
    margin: "0 7px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "1px solid #777",
    backgroundColor: "transparent",
    color: "#fff",
    boxShadow: "0 0 5px rgba(255, 255, 255, 0.1)",
    textAlign: "center",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "3px",
    maxWidth: "100%",
    margin: "0 auto",
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <OtpInput
        value={value} 
        onChange={onChange} 
        numInputs={6}
        renderSeparator={null}
        renderInput={(props) => <input {...props} />}
        inputStyle={inputStyle}
        containerStyle={containerStyle}
      />
    </div>
  );
}