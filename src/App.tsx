/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TeamBuilding from './pages/TeamBuilding';
import RouteDetails from './pages/RouteDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-vibrant-orange selection:text-cloud-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team-building" element={<TeamBuilding />} />
          <Route path="/route-details" element={<RouteDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
