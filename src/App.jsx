import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SupportTicketForm from './pages/SupportTicketPage/SupportTicket';
import Header from './pages/User Home Page/components/Header Component/Header';
import Footer from './pages/User Home Page/components/Footer Component/Footer';
import RentCar from './pages/RentCarPage/RentCar';
import AddCar from './pages/AddCarPage/AddCarPage';
import Booking from './pages/BookingCarPage/Booking';
import BookingHistory from './pages/ProfilePage/components/bookingHistory/BookingHistory';
import ProfilePage from './pages/ProfilePage/Profile';

// Lazy load the components
const Home = lazy(() => import('./pages/HomePage/Home'));
const LoginPage = lazy(() => import('./pages/LoginPage/Login'));
const Registration = lazy(() => import('./pages/RegistrationPage/Registration'));
const UserHomePage = lazy(() => import('./pages/User Home Page/UserHomePage'));

function App() {
    return (
        <Router>
            <HeaderWithConditionalRendering />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/userhome" element={<UserHomePage />} />
                    <Route path="/Profile" element={<ProfilePage/>} />
                    <Route path="/AddCarPage" element={<AddCar/>} />
                    <Route path="/RentCar" element={<RentCar/>} />
                    <Route path="/Booking/:id" element={<Booking/>} />
                    <Route path ="/BookingHistory" element={<BookingHistory/>} />

                    <Route path="/supportTicket" element={<SupportTicketForm />} />
                </Routes>
                <Footer/>
            </Suspense>
        </Router>
    );
}

function HeaderWithConditionalRendering() {
    const location = useLocation();

    if (location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register') {
        return <Header />;
    }
    return null;
}

export default App;
