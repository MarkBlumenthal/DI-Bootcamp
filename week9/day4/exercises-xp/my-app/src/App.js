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

async function postJsonData() {
  const webhookUrl = "https://webhook.site/3c2e7144-aea8-42b3-80d3-f47770fd657e"; // Replace with your own Webhook URL

  const data = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors', // Prevents CORS errors but returns an opaque response
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    console.log('Request sent successfully.');

  } catch (error) {
    console.error('Error sending data:', error);
  }
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Profile
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Shop
          </NavLink>
          <NavLink
            to="/example1"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Example1
          </NavLink>
          <NavLink
            to="/example2"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Example2
          </NavLink>
          <NavLink
            to="/example3"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
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
      <div className="container">
        <button className="btn btn-primary mt-3" onClick={postJsonData}>
          Send JSON Data
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
