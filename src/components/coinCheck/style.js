import theme from "../../theme";

export const coinCheckStyles = {
  container: {
    width: '100%',
    maxWidth: '640px',
    margin: '0 auto',
    // padding: { xs: 2, sm: 2.5 },
    
  },
  card: {
    backgroundColor: '#1a1a1a',
    border: '1px solid #2b2b2b',
    borderRadius: '12px',
    padding: { xs: 2, sm: 3 },
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    marginTop: '20px',
  },
  header: {
    marginBottom: 2,
  },
  title: {
    fontSize: { xs: '20px', sm: '24px' },
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: 1,
  },
  description: {
    fontSize: { xs: '13px', sm: '14px' },
    color: '#a0a0a0',
    lineHeight: 1.6,
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: 1.5,
  },
//   textField: {
//     '& .MuiOutlinedInput-root': {
//       backgroundColor: '#1a1a1a',
//       color: '#ffffff',
//       borderRadius: '8px',
//       '& fieldset': {
//         borderColor: '#333333',
//       },
//       '&:hover fieldset': {
//         borderColor: '#1e90ff',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#1e90ff',
//         boxShadow: '0 0 0 3px rgba(30, 144, 255, 0.1)',
//       },
//     },
//     '& .MuiOutlinedInput-input': {
//       padding: '14px 16px',
//       fontSize: '14px',
//       color: '#ffffff',
//       '&::placeholder': {
//         color: '#666666',
//         opacity: 1,
//       },
//     },
//   },
  inputStyle: {
    width: '100%',
    padding: '0px ',
    '& .MuiOutlinedInput-root': {
      borderRadius: '999px !important',
      backgroundColor: 'transparent',
    },
    '& .MuiOutlinedInput-input': {
      padding: '9px 12px !important',
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3a3a3a',
    },
  },
  searchButton: {
    backgroundColor: '#2b2b2b',
    border: '1px solid #3a3a3a',
    width: 36,
    height: 36,
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: '#333333',
    },
  },
};