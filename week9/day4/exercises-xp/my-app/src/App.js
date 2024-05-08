import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary';
import './App.css'; 

function HomeScreen() {
  return <h1>Home</h1>;
}

function ProfileScreen() {
  return <h1>Profile</h1>;
}

function ShopScreen() {
  throw new Error('Something went wrong in the Shop!');
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="nav-link" to="/" end activeClassName="active">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/profile" activeClassName="active">
            Profile
          </NavLink>
          <NavLink className="nav-link" to="/shop" activeClassName="active">
            Shop
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
        
        <Route
          path="*"
          element={
            <ErrorBoundary>
              <h1>404 Page Not Found</h1>
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
