// 
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LearningPathRecommendation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a delay to mimic loading recommendations
    const timer = setTimeout(() => {
      navigate('/learning-paths');
    }, 2000); // Change the delay time as needed

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      {/* <h2>Finding learning path recommendations for you based on your responses</h2> */}
      <div className="loading-spinner" style={styles.spinner}>
        <span className="circle" style={styles.circle}></span>
        <h2>Finding learning path recommendations for you based on<br>
        </br> your responses</h2>

      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensure the content is centered vertically
  },
  spinner: {
    display: 'inline-block',
    textAlign: 'center',
  },
  circle: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'yellow', // Set the spinner color to yellow
    animation: 'spin 1s linear infinite', // Apply spin animation
  },
  // Spin animation
  '@keyframes spin': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
};

export default LearningPathRecommendation;
