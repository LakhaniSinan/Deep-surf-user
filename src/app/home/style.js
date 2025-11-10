// styles.js
export const styles = {
  container: {
    display: 'flex',
    gap: 1.5,
    p: 3,
    bgcolor: '#1a1a1a',
    minHeight: '100vh',
    alignItems: 'flex-start'
  },
  
  button: {
    bgcolor: '#2a2a2a',
    color: '#9ca3af',
    borderRadius: '20px',
    px: 2.5,
    py: 1,
    textTransform: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    minWidth: '60px',
    '&:hover': {
      bgcolor: '#333333'
    }
  },
  
  buttonActive: {
    bgcolor: '#3a3a3a',
    color: '#ffffff',
    borderRadius: '20px',
    px: 2.5,
    py: 1,
    textTransform: 'none',
    fontSize: '0.875rem',
    fontWeight: 600,
    minWidth: '60px',
    '&:hover': {
      bgcolor: '#404040'
    }
  }
};