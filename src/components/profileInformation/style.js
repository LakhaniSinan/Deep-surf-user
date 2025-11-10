// personalInfoFormStyles.js

import theme from "../../theme";

export const formStyles = {
  container: {
    // maxWidth: 500,
    // margin: 'auto',
    marginTop: 5,
    padding: 4,
    backgroundColor: '#1e1e1e', // Dark background for the card/form area
    color: '#ffffff', // Light text color
    borderRadius: 2,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 4,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 3,
  },
 
   uploadButton: {
    color: "text.secondary",
    borderColor: theme.palette.text.secondary,
    border: 1,
    py: 1,
    ml : 2,
    
    
    borderRadius: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    "&:hover": {
      borderColor: "rgba(255,255,255,0.35)",
      backgroundColor: "background.mediumGray",
    },
  },
  inputGroup: {
    // marginBottom: 4,
  },
  inputLabel: {
    marginBottom: 1,
    fontWeight: 'medium',
  },
  textField: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.2)', // Highlight on hover
    },
    '& .MuiInputBase-input': {
      color: '#ffffff', // Input text color
    },
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly lighter background for input
    borderRadius: 1,
    
  },
  helperText: {
    marginTop: 0.5,
    marginLeft: 1,
    color: 'text.secondary',
  },
  changeButton: {
    marginLeft: 2,
    height: '56px', // Match TextField height for alignment
    textTransform: 'none',
    borderColor: 'rgba(255, 255, 255, 0.2)', // Border color
    color: 'primary.light', // Text color
    '&:hover': {
      borderColor: 'primary.main',
    }
  },
  saveButton: {
    marginTop: 4,
    padding: '12px 24px',
    textTransform: 'none',
    backgroundColor: 'gray', // Use primary color from theme
    color: '#1e1e1e', // Dark text on primary button
    '&:hover': {
      backgroundColor: 'primary.dark',
    }
  },
};