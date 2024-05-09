import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from '../components/GalleryItem';

const PEXELS_API_KEY = '8dXNe9rhx8Xw1WLtaXRKgC9hbQWUQjwD6IaMFkQ4C7IETPMN1HjffBxo';
const PEXELS_BASE_URL = 'https://api.pexels.com/v1/search';

function GalleryPage() {
  const { category, query } = useParams();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30); // Default page size

  const fetchImages = async () => {
    const searchQuery = category || query;
    const response = await axios.get(PEXELS_BASE_URL, {
      headers: { Authorization: PEXELS_API_KEY },
      params: { query: searchQuery, per_page: itemsPerPage, page }
    });
    setImages(response.data.photos);
  };

  useEffect(() => {
    fetchImages();
  }, [category, query, page, itemsPerPage]);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () => setPage((prevPage) => Math.max(1, prevPage - 1));
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setPage(1); // Reset to the first page after changing items per page
  };

  return (
    <div>
      <div>
        <label htmlFor="items-per-page">Items per page:</label>
        <select
          id="items-per-page"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={18}>18</option>
          <option value={24}>24</option>
          <option value={30}>30</option>
        </select>
      </div>
      <div className="gallery-grid">
        {images.map((img) => (
          <GalleryItem key={img.id} url={img.src.medium} />
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default GalleryPage;
