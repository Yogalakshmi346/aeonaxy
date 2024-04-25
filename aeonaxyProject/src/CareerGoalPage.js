// import React from 'react';
// import { Link } from 'react-router-dom';

// const CareerGoalPage = () => {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <img src="/img1.png" alt="Career Goal" style={{ marginRight: '20px' }} />
//       <div>
//         <h2>You're in the right place</h2>
//         <p>
//           Brilliant gets you hands-on to help improve your professional skills and knowledge.<br></br> You'll interact with concepts and solve fun problems in math, science, and computer science.
//         </p>
//         <Link to="/math-comfort-level">
//           <button>Continue</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CareerGoalPage;
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const CareerGoalPage = () => {
//   const navigate = useNavigate(); // Using useNavigate to navigate between pages

//   const handleGoBack = () => {
//     navigate(-1); // Navigates to the previous page in the history stack
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <img src="/img1.png" alt="Career Goal" style={{ marginRight: '20px' }} />
//       <div>
//         <h2>You're in the right place</h2>
//         <p>
//           Brilliant gets you hands-on to help improve your professional skills and knowledge.<br></br> You'll interact with concepts and solve fun problems in math, science, and computer science.
//         </p><br></br>
//         <br></br>
//         <br></br>
//         <br></br>

//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <div style={{ display: 'flex', gap: '500px' }}> {/* Added gap between buttons */}
//           <button onClick={handleGoBack}>Back</button> {/* Back button */}
//           <Link to="/math-comfort-level">
//             <button>Continue</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerGoalPage;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CareerGoalPage = () => {
  const navigate = useNavigate(); // Using useNavigate to navigate between pages

  const handleGoBack = () => {
    navigate(-1); // Navigates to the previous page in the history stack
  };

  return (
    <div style={styles.container}>
      <img src="/img1.png" alt="Career Goal" style={styles.image} />
      <div style={styles.content}>
        <div>
          <h2>You're in the right place</h2>
          <p>
            Brilliant gets you hands-on to help improve your professional <br />skills and knowledge.
            You'll interact with concepts and solve<br /> fun problems in math, science, and computer science.
          </p>
        </div><br></br>
        <br></br>
        <br></br>
        <div style={styles.buttonContainer}>
          <button onClick={handleGoBack}>Back</button> {/* Back button */}
          <div style={{ flex: 1 }}></div> {/* Empty flex container to create space */}
          <Link to="/math-comfort-level">
            <button>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensure the content is centered vertically
  },
  image: {
    marginRight: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px', // Added gap between buttons
  },
};

export default CareerGoalPage;
