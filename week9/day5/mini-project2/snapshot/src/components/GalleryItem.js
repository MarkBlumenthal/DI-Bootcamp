function GalleryItem({ url }) {
    return (
      <div className="gallery-item">
        <img src={url} alt="gallery item" />
      </div>
    );
  }
  
  export default GalleryItem;
  