import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react'
import './App.css'


// Components
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/components_landingpage/RegistrationForm';
import VerificationPage from './components/VerificationPage';
import LoginForm from './components/components_landingpage/LoginForm';
import ChangePasswordForm from './components/ChangePasswordForm';
import ResetPasswordPage from './components/ResetPasswordPage';
import ProfileUpdateForm from './components/ProfileUpdateForm';
import BloggingFeature from './components/BloggingFeature';
import ArticleDetailPage from './components/ArticleDetailPage';
import Navbar from './components/Navbar';


export default function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/verification/:token" element={<VerificationPage/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/change-password" element={<ChangePasswordForm/>} />
        <Route path="/reset-password" element={<ResetPasswordPage/>} />
        <Route path="/profile" element={<ProfileUpdateForm/>} /> 
        <Route path="/blogging" element={<BloggingFeature/>} />
        <Route path="/article" element={<ArticleDetailPage/>} />
      </Routes>
    </ChakraProvider>
  );
}

