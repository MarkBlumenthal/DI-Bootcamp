import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <header>
        <h1>SnapShot</h1>
        <SearchBar />
        <NavBar />
      </header>
      <Routes>
        <Route path="/gallery/:category" element={<GalleryPage />} />
        <Route path="/search/:query" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

