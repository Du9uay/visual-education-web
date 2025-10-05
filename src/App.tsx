import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import MachineVisionIndustryPage from './pages/course/MachineVisionIndustryPage';
import ApplicationScopePage from './pages/course/ApplicationScopePage';
import SystemComponentsPage from './pages/course/SystemComponentsPage';
import AssemblyApplicationPage from './pages/course/AssemblyApplicationPage';
import SizeMeasurementPage from './pages/course/SizeMeasurementPage';
import DefectDetectionPage from './pages/course/DefectDetectionPage';
import CourseTestPage from './pages/CourseTestPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <Navigation />
        <div className="container mx-auto px-4 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/machine-vision-industry" element={<MachineVisionIndustryPage />} />
            <Route path="/course/application-scope" element={<ApplicationScopePage />} />
            <Route path="/course/system-components" element={<SystemComponentsPage />} />
            <Route path="/course/assembly-application" element={<AssemblyApplicationPage />} />
            <Route path="/course/size-measurement" element={<SizeMeasurementPage />} />
            <Route path="/course/defect-detection" element={<DefectDetectionPage />} />
            <Route path="/course-test" element={<CourseTestPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
