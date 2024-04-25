// import React from 'react';
// import { Link } from 'react-router-dom';

// const UserTypeSelection = () => {
//   const userTypes = [
//     { id: 1, label: 'Student or soon to be enrolled', icon: '👨‍🎓' },
//     { id: 2, label: 'Professional pursuing a career', icon: '👩‍💼' },
//     { id: 3, label: 'Parent of a school-age child', icon: '👨' },
//     { id: 4, label: 'Lifelong learner', icon: '👴' },
//     { id: 5, label: 'Teacher', icon: '👩‍🏫' },
//     { id: 6, label: 'Other', icon: '👱‍♂️' },
//   ];

//   const handleSelection = (type) => {
//     // Handle the selection of the user type
//     console.log(`Selected user type: ${type.label}`);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
//       <div>
//         <h3>Which describes you best?</h3>
//         <p>This will help us personalize your experience.</p>
//         {userTypes.map((type) => (
//           <div key={type.id} style={{ marginBottom: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => handleSelection(type)}>
//             <span style={{ fontSize: '24px', marginRight: '10px' }} role="img" aria-label={type.label}>{type.icon}</span>
//             <p>{type.label}</p>
//           </div>
//         ))}
//         <Link to="/interests">
//           <button>Continue</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UserTypeSelection;
import React from 'react';
import { Link } from 'react-router-dom';

const UserTypeSelection = () => {
  const userTypes = [
    { id: 1, label: 'Student or soon to be enrolled', icon: '👨‍🎓' },
    { id: 2, label: 'Professional pursuing a career', icon: '👩‍💼' },
    { id: 3, label: 'Parent of a school-age child', icon: '👨' },
    { id: 4, label: 'Lifelong learner', icon: '👴' },
    { id: 5, label: 'Teacher', icon: '👩‍🏫' },
    { id: 6, label: 'Other', icon: '👱‍♂️' },
  ];

  const handleSelection = (type) => {
    // Handle the selection of the user type
    console.log(`Selected user type: ${type.label}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div>
        <h3>Which describes you best?</h3>
        <p>This will help us personalize your experience.</p>
        {userTypes.map((type) => (
          <div
            key={type.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              border: '1px solid #ccc', // Add border for box shape
              borderRadius: '4px', // Add border radius for rounded corners
              marginBottom: '20px',
              cursor: 'pointer',
            }}
            onClick={() => handleSelection(type)}
          >
            <span style={{ fontSize: '24px', marginRight: '10px' }} role="img" aria-label={type.label}>
              {type.icon}
            </span>
            <p>{type.label}</p>
          </div>
        ))}
        <Link to="/interests">
          <button>Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default UserTypeSelection;

