/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';

import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword';
import HomePage from './pages/HomePage'
import LogIn from './pages/LogIn'

import Logout from './pages/userDashboard/Logout'
import Dashboard from './pages/userDashboard/Dashboard'
import BookNow from './pages/userDashboard/BookNow'
import MyOrders from './pages/userDashboard/MyOrders'
import Notification from './pages/userDashboard/Notification'
import Settings from './pages/userDashboard/Settings'
import MyProfile from './pages/userDashboard/MyProfile'
import UpdateProfile from './pages/userDashboard/UpdateProfile'
import Home from './pages/userDashboard/Home'

import PricingPage from './pages/PricingPage';
import Calendar from './component/Calendar';
import DateTimePicker from './component/DateTimePicker';
import BookNow1 from './component/BookNow';
import ServicePage from './pages/ServicePage';
import Test from './pages/Test';
import AdminSidebar from './component/AdminSidebar';
import ToggleSwitch from './component/Toggle';


import AdminDashboard from './pages/AdminDashboard/Dashboard'
import AdminSignUp from './pages/AdminSignUp';
import AdminLogIn from './pages/AdminLogIn';
import AdminForgotPassword from './pages/AdminForgotPassword';
import CustomerList from './pages/AdminDashboard/CustomerList'
import ProductList from './pages/AdminDashboard/ProductList';
import OrderList from './pages/AdminDashboard/OrdersList'
import AdminNotification from './pages/AdminDashboard/Notification'
import AdminSettings from './pages/AdminDashboard/Settings'
import AdminLogout from './pages/AdminDashboard/Logout';
import AddProduct from './pages/AdminDashboard/AddProducts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/test" element={<Test />} />
        <Route path="/toggle" element={<ToggleSwitch />} />
        <Route path="/admin-signup" element={<AdminSignUp />} />
        <Route path="/admin-login" element={<AdminLogIn />} />
        <Route path="/admin-forgot-password" element={<AdminForgotPassword />} />
        

        <Route path="/dashboard/*" element={<DashboardWithSidebar />} />
        <Route path="/bookNow" element={<SidebarRouteWrapper><BookNow /></SidebarRouteWrapper>} />
        <Route path="/update-profile" element={<SidebarRouteWrapper><UpdateProfile /></SidebarRouteWrapper>} />
        <Route path="/my-profile" element={<SidebarRouteWrapper><MyProfile /></SidebarRouteWrapper>} />
        <Route path="/home" element={<SidebarRouteWrapper><Home /></SidebarRouteWrapper>} />
        <Route path="/orders" element={<SidebarRouteWrapper><MyOrders /></SidebarRouteWrapper>} />
        <Route path="/notifications" element={<SidebarRouteWrapper><Notification /></SidebarRouteWrapper>} />
        <Route path="/settings" element={<SidebarRouteWrapper><Settings /></SidebarRouteWrapper>} />
        <Route path="/logout" element={<SidebarRouteWrapper><Logout /></SidebarRouteWrapper>} />
        <Route path="/pricing-page" element={<PricingPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/date-time" element={<DateTimePicker />} />
        <Route path="/booknow1" element={<BookNow1 />} />
        <Route path="/services" element={<ServicePage />} />


        <Route path="/admin-dashboard/*" element={<DashboardWithAdminSidebar />} />  
        <Route path="/customers-list" element={<AdminSidebarRouteWrapper><CustomerList /></AdminSidebarRouteWrapper>} /> 
        <Route path="/products-list" element={<AdminSidebarRouteWrapper><ProductList /></AdminSidebarRouteWrapper>} /> 
        <Route path="/orders-list" element={<AdminSidebarRouteWrapper><OrderList /></AdminSidebarRouteWrapper>} /> 
        <Route path="/admin-notifications" element={<AdminSidebarRouteWrapper><AdminNotification /></AdminSidebarRouteWrapper>} /> 
        <Route path="/admin-settings" element={<AdminSidebarRouteWrapper><AdminSettings /></AdminSidebarRouteWrapper>} /> 
        <Route path="/admin-logout" element={<AdminSidebarRouteWrapper><AdminLogout /></AdminSidebarRouteWrapper>} />
        <Route path="/add-products" element={<AdminSidebarRouteWrapper><AddProduct /></AdminSidebarRouteWrapper>} />  
      </Routes>
    </Router>
  )
}

function SidebarRouteWrapper({ children }) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
}

function DashboardWithSidebar() {
  return (
    <Sidebar>
      <Dashboard />
    </Sidebar>
  );
}
function DashboardWithAdminSidebar() {
  return (
    <AdminSidebar>
      <AdminDashboard />
    </AdminSidebar>
  );
}

function AdminSidebarRouteWrapper({ children }) {
  return (
    <AdminSidebar>
      {children}
    </AdminSidebar>
  );
}




export default App

