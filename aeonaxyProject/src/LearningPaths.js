// 
import React from 'react';

const LearningPaths = () => {
  const learningPaths = [
    {
      id: 1,
      name: 'Foundational Math Build',
      description: 'Build your foundational skills in algebra, geometry, and probability.',
      image: '/img2.png', // Add image URL for path 1
      popular: true,
    },
    {
      id: 2,
      name: 'Mathematical Thinking',
      description: 'Build your foundational skills in algebra, geometry, and probability.',
      image: '/img3.png', // Add image URL for path 2
    },
  ];

  return (
    <div style={styles.container}>
      <h2>Learning paths based on your answers</h2>
      <p>Choose one to get started. You can switch anytime.</p>
      <div className="learning-paths-container" style={styles.pathsContainer}>
        {learningPaths.map((path) => (
          <div key={path.id} className={`learning-path ${path.popular ? 'popular' : ''}`} style={styles.path}>
            <img src={path.image} alt={path.name} style={styles.image} /> {/* Image for the learning path */}
            <h3>{path.name}</h3>
            <p>{path.description}</p>
            {path.popular && <span className="popular-label">MOST POPULAR</span>}
          </div>
        ))}
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
  pathsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap', // Allow paths to wrap to the next line if necessary
  },
  path: {
    width: '300px',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    position: 'relative',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
};

export default LearningPaths;
