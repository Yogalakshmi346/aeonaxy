// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const MathComfortLevelPage = () => {
//     const navigate = useNavigate();

//   const handleContinue = () => {
//     navigate('/learning-path-recommendation');
// };
//   return (
//     <div>
//       <h2>What is your math comfort level?</h2>
//       <p>Choose the highest level you feel confident in — you can always adjust later.</p>
//       <div>
//         {/* Render the math comfort level options */}
//         <div>5 × 1/2 = ?</div>
//         <div>3x + 5 = 4</div>
//         <div>x = (-b ± √(b^2 - 4ac)) / 2a</div>
//         <div>∫ x^2 dx = ?</div>
//       </div>
//       {/* <button>Continue</button> */}
//       <button onClick={handleContinue}>Continue</button>
//     </div>
//   );
// };

// export default MathComfortLevelPage;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MathComfortLevelPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigates to the previous page in the history stack
    };

    const handleContinue = () => {
        navigate('/learning-path-recommendation');
    };

    return (
        <div style={styles.container}>
            <h2>What is your math comfort level?</h2>
            <p>Choose the highest level you feel confident in — you can always adjust later.</p><br></br>
            <br></br><br></br><br></br>
            <div style={styles.boxContainer}> {/* Centered container */}
                {/* Render the math comfort level options */}
                <div style={styles.box}>5 × 1/2 = ?<br></br>
                <br></br>Basic Algebra
                 <br></br> Foundational</div>
                <div style={styles.box}>3x + 5 = 4<br></br>
                <br></br>Intermediate Algebra
                 <br></br> Intermediate</div>
                <div style={styles.box}>x = (-b ± √(b^2 - 4ac)) / 2a<br></br>
                <br></br>Calcus
                 <br></br> Advanced</div>
                <div style={styles.box}>∫ x^2 dx = ?<br></br>
                <br></br>Arithmetic
                 <br></br> Introductory</div>
            </div>
            <div style={{display: 'flex', gap: '500px' ,marginTop: '20px' }}> {/* Added space */}
                <button onClick={handleGoBack}>Back</button> {/* Back button */}
                <button onClick={handleContinue}>Continue</button>
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
        minHeight: '100vh', // Ensures the content is centered vertically
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap', // Allows the boxes to wrap to the next line if necessary
    },
    box: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '5px',
    },
};

export default MathComfortLevelPage;
