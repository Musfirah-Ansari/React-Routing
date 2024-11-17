import { useHistory } from 'react-router-dom';

const Nocomp = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f8f9fa',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '6rem', color: '#e74c3c' }}>404</h1>
      <p style={{ fontSize: '1.5rem', color: '#555' }}>Oops! Page not found.</p>
      <p style={{ fontSize: '1rem', color: '#777', marginBottom: '20px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={goHome}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Nocomp;