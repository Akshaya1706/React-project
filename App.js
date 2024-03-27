import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header";
import DrawerComp from "./DrawerComp";
import EmployeeDetails from "./EmployeeDetails";
import Instructions from "./Instructions";
import Projects from "./Projects";
import Register from "./RegisterForm";
import Logout from "./Logout";
import Payroll from "./payroll";
import Achievements from "./Achievements";
import Login from "./components/LoginForm";
import Home from "./Home";
import AuthProvider from "./AuthContext";
import EmployeeImage from "./EmployeeImage";
import AchievementsImage from "./AchievementsImage";
import Payrollimage from "./Payrollimage";
import ProjectImage from "./ProjectImage";
import InstructionImage from "./InstructionImage";
import FeedbackForm from "./FeedbackForm";
import FeedbackImage from "./FeedbackImage";
function App() {
  return (
    <>
      <BrowserRouter>
      <AuthProvider >

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/" element={<DrawerComp />} />
          <Route path="/" element={<Home />} />
    
      
          <Route
            path="EmployeeDetails"
            element={
              <>
                <EmployeeImage/>
                <EmployeeDetails />
              </>
            }
            />
          <Route
            path="Achievements"
            element={
              <>
                <AchievementsImage/>
                <Achievements/>
              </>
            }
            />
          <Route
            path="payroll"
            element={
              <>
                <Payrollimage/>
                <Payroll />
              </>
            }
            />
       
          <Route
            path="Projects"
            element={
              <>
    
                <ProjectImage/>
                <Projects />
              </>
            }
            />
          <Route
            path="/login"
            element={
              <>
                <Login />
      
              </>
            }
            />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
            />
          <Route
            path="Instructions"
            element={
              <>
                  <InstructionImage/>
                <Instructions />
              </>
            }
            />
         
              <Route
                path="Feedback"
                element={
                  <>
                      <FeedbackImage/>
                    <FeedbackForm />
                  </>
                }
                />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
       

            </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
