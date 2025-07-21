import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import QuickExitButton from './components/UI/QuickExitButton';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Scan from './pages/Scan';
import Emergency from './pages/Emergency';
import Rights from './pages/Rights';
import Lawyers from './pages/Lawyers';
import Stories from './pages/Stories';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LawyerPartnership from './pages/LawyerPartnership';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/rights" element={<Rights />} />
            <Route path="/lawyers" element={<Lawyers />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lawyer-partnership" element={<LawyerPartnership />} />
          </Routes>
        </main>
        <Footer />
        <QuickExitButton />
      </div>
    </Router>
  );
}

export default App;