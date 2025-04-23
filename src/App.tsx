import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProtectedRoute from './components/ProtectedRoute';

// Page Components
import Home from './pages/Home';
import CorporatePrograms from './pages/CorporatePrograms';
import MaangCertificates from './pages/MaangCertificates';
import ForeignExchange from './pages/ForeignExchange';
import ForeignDegreePrograms from './pages/ForeignDegreePrograms';
import Contact from './pages/ContactUs';
import Career from './pages/Career';
import UniversityPartnerProgram from './pages/UniversityPartnerProgram';
import ITServices from './pages/Itprojects';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './pages/AboutUs';
import InternshipPrograms from './pages/Internship';
import MernProjects from './pages/MernProjects';
import PlacementGuaranteeProgram from './pages/Placementgauranteeprogram';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import FourToFourProgram from './pages/4to4program';
import MernStackCurriculum from './pages/mern-stack';
import ProductBasedTraining from './pages/product-based';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          
          {/* Public Routes with Layout */}
          <Route
            element={
              <>
                <Header />
                <main>
                  <Outlet />
                </main>
                <Footer />
                <WhatsAppButton 
                  phoneNumber="918805843309" 
                  message="Hello, I'm interested in learning more about Lotelite Technology services." 
                />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/corporate-programs" element={<CorporatePrograms />} />
            <Route path="/maang-certificates" element={<MaangCertificates />} />
            <Route path="/foreign-exchange" element={<ForeignExchange />} />
            <Route path="/foreign-degree-programs" element={<ForeignDegreePrograms />} />
            <Route path="/university-partner-program" element={<UniversityPartnerProgram />} />
            <Route path="/internship-program" element={<InternshipPrograms />} />
            <Route path="/mern-projects" element={<MernProjects />} />
            <Route path="/enroll/:projectId" element={<MernProjects />} />
            <Route path="/demo/:projectId" element={<MernProjects />} />
            <Route path="/it-project" element={<ITServices />} />
            <Route path="/placement-guarantee-program" element={<PlacementGuaranteeProgram />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/enroll" element={<FourToFourProgram />} />
            <Route path="/mern-stack" element={<MernStackCurriculum />} />
            <Route path="/product-based" element={<ProductBasedTraining />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;