import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary';
import PostList from './PostList';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import './App.css';

function HomeScreen() {
  return (
    <div>
      <h1>Home</h1>
      <PostList />
    </div>
  );
}

function ProfileScreen() {
  return <h1>Profile Screen</h1>;
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
          <NavLink className="nav-link" to="/example1" activeClassName="active">
            Example1
          </NavLink>
          <NavLink className="nav-link" to="/example2" activeClassName="active">
            Example2
          </NavLink>
          <NavLink className="nav-link" to="/example3" activeClassName="active">
            Example3
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
          path="/example1"
          element={
            <ErrorBoundary>
              <Example1 />
            </ErrorBoundary>
          }
        />
        <Route
          path="/example2"
          element={
            <ErrorBoundary>
              <Example2 />
            </ErrorBoundary>
          }
        />
        <Route
          path="/example3"
          element={
            <ErrorBoundary>
              <Example3 />
            </ErrorBoundary>
          }
        />
        {/* Catch-all route for undefined paths */}
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


