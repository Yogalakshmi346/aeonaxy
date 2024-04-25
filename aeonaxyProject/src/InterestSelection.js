// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const InterestSelection = () => {
//   const [selectedInterest, setSelectedInterest] = useState(null);
//   const navigate = useNavigate();

//   const interests = [
//     { id: 1, label: 'Learning specific skills to advance my career', icon: '📈' },
//     { id: 2, label: "Exploring new topics I'm interested in", icon: '🌐' },
//     { id: 3, label: 'Refreshing my math foundations', icon: '✖️' },
//     { id: 4, label: 'Exercising my brain to stay sharp', icon: '🎯' },
//     { id: 5, label: 'Something else', icon: '📚' },
//   ];

//   const handleInterestSelection = (interest) => {
//     setSelectedInterest(interest);
//     if (interest.id === 1) {
//       navigate('/career-goal');
//     }
//   };
//   const handleBackButtonClick = () => {
//     navigate(-1); // Navigates to the previous page in the history stack
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
//       <div>
//         <h3>Which are you most interested in?</h3>
//         <p>Choose just one. This will help us get you started (but won't limit your experience).</p>
//         <div>
//           {interests.map((interest) => (
//             <div
//               key={interest.id}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: '10px',
//                 border: selectedInterest === interest ? '1px solid green' : '1px solid transparent',
//                 cursor: 'pointer',
//                 borderRadius: '4px',
//                 marginBottom: '10px',
//               }}
//               onClick={() => handleInterestSelection(interest)}
//             >
//               <span role="img" aria-label={interest.label} style={{ marginRight: '10px' }}>
//                 {interest.icon}
//               </span>
//               <span>{interest.label}</span>
//             </div>
//           ))}
//         </div>
//         {/* <button disabled={!selectedInterest}>Continue</button> <br></br> */}
//         {/* <button onClick={handleBackButtonClick}>Back</button> */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
//           <button onClick={handleBackButtonClick}>Back</button>
//           <button disabled={!selectedInterest}>Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterestSelection;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InterestSelection = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const navigate = useNavigate();

  const interests = [
    { id: 1, label: 'Learning specific skills to advance my career', icon: '📈' },
    { id: 2, label: "Exploring new topics I'm interested in", icon: '🌐' },
    { id: 3, label: 'Refreshing my math foundations', icon: '✖️' },
    { id: 4, label: 'Exercising my brain to stay sharp', icon: '🎯' },
    { id: 5, label: 'Something else', icon: '📚' },
  ];

  const handleInterestSelection = (interest) => {
    setSelectedInterest(interest);
    if (interest.id === 1) {
      navigate('/career-goal');
    }
  };
  const handleBackButtonClick = () => {
    navigate(-1); // Navigates to the previous page in the history stack
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div>
        <h3>Which are you most interested in?</h3>
        <p>Choose just one. This will help us get you started (but won't limit your experience).</p>
        <div>
          {interests.map((interest) => (
            <div
              key={interest.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                border: selectedInterest === interest ? '1px solid green' : '1px solid transparent',
                cursor: 'pointer',
                borderRadius: '4px',
                marginBottom: '10px',
                boxShadow: '0px 0px 5px rgba(1, 0, 0, 0.1)', // Add box shadow for a box effect
              }}
              onClick={() => handleInterestSelection(interest)}
            >
              <span role="img" aria-label={interest.label} style={{ marginRight: '10px' }}>
                {interest.icon}
              </span>
              <span>{interest.label}</span>
            </div>
          ))}
        </div>
        {/* <button disabled={!selectedInterest}>Continue</button> <br></br> */}
        {/* <button onClick={handleBackButtonClick}>Back</button> */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <button onClick={handleBackButtonClick}>Back</button>
          <button disabled={!selectedInterest}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default InterestSelection;
