import React, { useState } from 'react';
import OtpInput from 'react-otp-input';



export default function CustomOtp() {
  const [otp, setOtp] = useState('');

  const inputStyle = {
    width: '35px',          
    height: '35px',           
    margin: '0 7px',          
    fontSize: '18px',         
    borderRadius: '8px',       
    border: '1px solid #777',  
    backgroundColor: 'transparent', 
    color: '#fff',            
    boxShadow: '0 0 5px rgba(255, 255, 255, 0.1)', 

  };
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px', 
  };

  return (
        <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={null} 
            renderInput={(props) => <input {...props} className="otp-input-box" />}
            inputStyle={inputStyle}
            containerStyle={containerStyle}
        />
  );
}

