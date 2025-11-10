export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    bgcolor: '#000',
    p: 3
  },
  
  card: {
    bgcolor: '#18181b',
    borderRadius: 4,
    p: 4,
    width: 320,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
  },
  
  header: {
    textAlign: 'center',
    mb: 4
  },
  
  subtitle: {
    color: '#9ca3af',
    fontWeight: 500,
    mb: 0.5,
    fontSize: '0.875rem'
  },
  
  title: {
    color: '#facc15',
    fontWeight: 700,
    fontSize: '2rem'
  },
  
  gaugeContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  scoreBox: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 8px)'
  },
  
  scoreBadge: {
    bgcolor: '#27272a',
    borderRadius: '9999px',
    px: 3,
    py: 1.5,
    border: '1px solid #3f3f46'
  },
  
  scoreText: {
    color: 'white',
    fontWeight: 700,
    fontSize: '2.5rem'
  }
};