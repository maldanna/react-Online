import React from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeNavbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';
import About from './components/About';
import Help from './components/Help';
import FindLabours from './components/FindLabours';
import FindWork from './components/FindWork';
import Work from './components/Work';

export default function App() {
  return (
    <div>
      <HomeNavbar />
    </div>
  );
}
