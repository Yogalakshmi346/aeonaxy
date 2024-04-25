import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserTypeSelection from './UserTypeSelection';
import InterestSelection from './InterestSelection';
import MathComfortLevelPage from './MathComfortLevelPage';
import CareerGoalPage from './CareerGoalPage';
import LearningPathRecommendation from './LearningPathRecommendation';
import LearningPaths from './LearningPaths';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserTypeSelection />} />
        <Route path="/interests" element={<InterestSelection />} />
        <Route path="/career-goal" element={<CareerGoalPage />} />
        <Route path="/math-comfort-level" element={<MathComfortLevelPage />} />
        <Route path="/learning-path-recommendation" element={<LearningPathRecommendation />} /> {/* New route */}
        <Route path="/learning-paths" element={<LearningPaths />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;